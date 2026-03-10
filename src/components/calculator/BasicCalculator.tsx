"use client";

import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

type RoundingMode = "auto" | "fixed2" | "fixed4" | "sig6";

type Action =
  | { type: "digit"; payload: string }
  | { type: "setEntry"; payload: string }
  | { type: "decimal" }
  | { type: "operator"; payload: "+" | "−" | "×" | "÷" }
  | { type: "percent" }
  | { type: "negate" }
  | { type: "backspace" }
  | { type: "clear" }
  | { type: "allClear" }
  | { type: "memoryClear" }
  | { type: "memoryRecall" }
  | { type: "memoryAdd" }
  | { type: "memorySub" }
  | { type: "setMode"; payload: "step" | "expr" }
  | { type: "setRounding"; payload: RoundingMode }
  | { type: "equals" };

interface State {
  display: string;
  expression: string;
  previous: number | null;
  operator: "+" | "−" | "×" | "÷" | null;
  waitingForOperand: boolean;
  memory: number;
  repeat: { operator: "+" | "−" | "×" | "÷"; operand: number } | null;
  mode: "step" | "expr";
  tokens: string[];
  rounding: RoundingMode;
}

const MAX_DISPLAY_LENGTH = 12;
const INIT: State = {
  display: "0",
  expression: "",
  previous: null,
  operator: null,
  waitingForOperand: true,
  memory: 0,
  repeat: null,
  mode: "step",
  tokens: [],
  rounding: "auto",
};

function formatDisplay(value: number): string {
  const s = String(value);
  if (s.length > MAX_DISPLAY_LENGTH) {
    if (Math.abs(value) >= 1e12 || (Math.abs(value) < 1e-6 && value !== 0))
      return value.toExponential(6);
    return value.toPrecision(MAX_DISPLAY_LENGTH - 2);
  }
  return s;
}

function compute(a: number, op: "+" | "−" | "×" | "÷", b: number): number {
  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? Number.NaN : a / b;
    default:
      return b;
  }
}

function opSymbol(op: "+" | "−" | "×" | "÷") {
  return { "+": "+", "−": "−", "×": "×", "÷": "÷" }[op];
}

function applyRounding(n: number, mode: RoundingMode): number {
  if (!Number.isFinite(n)) return n;
  if (mode === "fixed2") return Number(n.toFixed(2));
  if (mode === "fixed4") return Number(n.toFixed(4));
  if (mode === "sig6") return Number(n.toPrecision(6));
  return n;
}

function safeResultDisplay(n: number, rounding: RoundingMode): string {
  if (!Number.isFinite(n)) return "Error";
  return formatDisplay(applyRounding(n, rounding));
}

function precedence(op: string) {
  return op === "×" || op === "÷" ? 2 : op === "+" || op === "−" ? 1 : 0;
}

function evaluateTokens(tokens: string[]): number {
  // Shunting-yard to RPN then evaluate.
  const output: string[] = [];
  const ops: string[] = [];

  for (const t of tokens) {
    if (t === "+" || t === "−" || t === "×" || t === "÷") {
      while (ops.length && precedence(ops[ops.length - 1]!) >= precedence(t)) {
        output.push(ops.pop()!);
      }
      ops.push(t);
    } else {
      output.push(t);
    }
  }
  while (ops.length) output.push(ops.pop()!);

  const stack: number[] = [];
  for (const t of output) {
    if (t === "+" || t === "−" || t === "×" || t === "÷") {
      const b = stack.pop() ?? 0;
      const a = stack.pop() ?? 0;
      stack.push(compute(a, t as any, b));
    } else {
      stack.push(Number(t));
    }
  }
  return stack[0] ?? 0;
}

function buildExpression(previous: number | null, operator: State["operator"], entry: string) {
  if (previous === null || operator === null) return entry;
  return `${formatDisplay(previous)} ${opSymbol(operator)} ${entry}`;
}

function loadMemory(): number {
  try {
    const raw = localStorage.getItem("calc:memory");
    const n = raw ? Number(raw) : 0;
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function saveMemory(memory: number) {
  try {
    localStorage.setItem("calc:memory", String(memory));
  } catch {
    // ignore
  }
}

type HistoryItem = { id: string; expression: string; result: string; ts: number };

function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem("calc:history");
    const parsed = raw ? (JSON.parse(raw) as HistoryItem[]) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (x) =>
          x &&
          typeof x.id === "string" &&
          typeof x.expression === "string" &&
          typeof x.result === "string" &&
          typeof x.ts === "number"
      )
      .slice(0, 50);
  } catch {
    return [];
  }
}

function saveHistory(items: HistoryItem[]) {
  try {
    localStorage.setItem("calc:history", JSON.stringify(items.slice(0, 50)));
  } catch {
    // ignore
  }
}

let clickAudio: HTMLAudioElement | null = null;
function playClick() {
  if (typeof Audio === "undefined") return;
  try {
    if (!clickAudio) {
      clickAudio = new Audio("/sound/click.mp3");
      clickAudio.preload = "auto";
    }
    clickAudio.currentTime = 0;
    void clickAudio.play().catch(() => {
      // ignore play errors
    });
  } catch {
    // ignore
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setMode": {
      const mode = action.payload;
      return {
        ...state,
        mode,
        tokens: [],
        previous: null,
        operator: null,
        repeat: null,
        display: "0",
        expression: "",
        waitingForOperand: true,
      };
    }
    case "setRounding": {
      return { ...state, rounding: action.payload };
    }
    case "digit": {
      const d = action.payload;
      if (state.waitingForOperand) {
        if (state.mode === "expr") {
          return {
            ...state,
            display: d,
            expression: state.tokens.length ? `${state.tokens.join(" ")} ${d}` : d,
            waitingForOperand: false,
            repeat: null,
          };
        }
        return {
          ...state,
          display: d === "0" ? "0" : d,
          expression: state.expression + d,
          waitingForOperand: false,
          repeat: null,
        };
      }
      const next = state.display === "0" && d !== "0" ? d : state.display + d;
      if (next.length > MAX_DISPLAY_LENGTH) return state;
      return {
        ...state,
        display: next,
        expression:
          state.mode === "expr"
            ? state.tokens.length
              ? `${state.tokens.join(" ")} ${next}`
              : next
            : state.expression + d,
        repeat: null,
      };
    }
    case "setEntry": {
      const v = action.payload;
      // keep only a safe numeric-ish string for display
      const cleaned = v.trim();
      if (!cleaned) return { ...state, display: "0", expression: "", waitingForOperand: true };
      return {
        ...state,
        display: cleaned,
        expression:
          state.mode === "expr"
            ? state.tokens.length
              ? `${state.tokens.join(" ")} ${cleaned}`
              : cleaned
            : buildExpression(state.previous, state.operator, cleaned),
        waitingForOperand: false,
      };
    }
    case "decimal": {
      if (state.waitingForOperand) {
        return {
          ...state,
          display: "0.",
          expression:
            state.mode === "expr"
              ? state.tokens.length
                ? `${state.tokens.join(" ")} 0.`
                : "0."
              : state.expression + "0.",
          waitingForOperand: false,
          repeat: null,
        };
      }
      if (state.display.includes(".")) return state;
      const next = state.display + ".";
      return { ...state, display: next, expression: state.expression + ".", repeat: null };
    }
    case "operator": {
      const op = action.payload;
      const current = parseFloat(state.display) || 0;
      const sym = opSymbol(op);

      if (state.mode === "expr") {
        // In expression mode, build tokens and only evaluate on equals.
        const nextTokens = [...state.tokens];
        if (!state.waitingForOperand) {
          nextTokens.push(state.display);
        } else if (nextTokens.length && (nextTokens[nextTokens.length - 1] === "+" || nextTokens[nextTokens.length - 1] === "−" || nextTokens[nextTokens.length - 1] === "×" || nextTokens[nextTokens.length - 1] === "÷")) {
          nextTokens.pop();
        } else if (!nextTokens.length) {
          nextTokens.push(state.display);
        }
        nextTokens.push(sym);
        return {
          ...state,
          tokens: nextTokens,
          expression: nextTokens.join(" ") + " ",
          waitingForOperand: true,
          repeat: null,
          previous: null,
          operator: null,
        };
      }

      if (state.previous !== null && state.operator && !state.waitingForOperand) {
        const result = compute(state.previous, state.operator, current);
        const formatted = safeResultDisplay(result, state.rounding);
        if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true };
        return {
          ...state,
          display: formatted,
          expression: formatted + " " + sym + " ",
          previous: result,
          operator: op,
          waitingForOperand: true,
        };
      }
      const displayStr = formatDisplay(current);
      return {
        ...state,
        display: displayStr,
        expression: displayStr + " " + sym + " ",
        previous: current,
        operator: op,
        waitingForOperand: true,
        repeat: null,
      };
    }
    case "percent": {
      const n = parseFloat(state.display) || 0;
      // Typical calculator behavior:
      // - If an operator is pending, treat x% as a percent of the previous value for +/−
      //   Example: 200 + 10% => 200 + 20
      // - For ×/÷ or no previous, treat x% as x/100
      const previous = state.previous;
      const operator = state.operator;
      const value =
        previous !== null && operator !== null
          ? operator === "+" || operator === "−"
            ? (previous * n) / 100
            : n / 100
          : n / 100;

      const formatted = safeResultDisplay(value, state.rounding);
      if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true };
      return {
        ...state,
        display: formatted,
        expression:
          previous !== null && operator !== null
            ? `${formatDisplay(previous)} ${opSymbol(operator)} ${formatted}`
            : formatted,
        waitingForOperand: false,
      };
    }
    case "backspace": {
      if (state.waitingForOperand) return state;
      if (state.display === "Error") return INIT;

      const nextDisplay =
        state.display.length <= 1 || (state.display.length === 2 && state.display.startsWith("-"))
          ? "0"
          : state.display.slice(0, -1);

      const nextExpression = buildExpression(state.previous, state.operator, nextDisplay);

      return {
        ...state,
        display: nextDisplay,
        expression: nextExpression,
        waitingForOperand: nextDisplay === "0",
      };
    }
    case "negate": {
      const n = parseFloat(state.display);
      if (Number.isNaN(n) || n === 0) return state;
      const next = formatDisplay(-n);
      return {
        ...state,
        display: next,
        expression: buildExpression(state.previous, state.operator, next),
      };
    }
    case "clear": {
      // Clear entry (keep pending operator if present).
      if (state.previous !== null && state.operator !== null) {
        const sym = opSymbol(state.operator);
        return {
          ...state,
          display: "0",
          expression: `${formatDisplay(state.previous)} ${sym} `,
          waitingForOperand: true,
        };
      }
      return { ...state, display: "0", expression: "", waitingForOperand: true };
    }
    case "allClear": {
      return { ...INIT, memory: state.memory, mode: state.mode };
    }
    case "memoryClear": {
      return { ...state, memory: 0 };
    }
    case "memoryRecall": {
      const formatted = safeResultDisplay(state.memory, state.rounding);
      if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true, memory: state.memory };
      return {
        ...state,
        display: formatted,
        expression: buildExpression(state.previous, state.operator, formatted),
        waitingForOperand: false,
      };
    }
    case "memoryAdd": {
      const current = parseFloat(state.display);
      const add = Number.isFinite(current) ? current : 0;
      return { ...state, memory: state.memory + add };
    }
    case "memorySub": {
      const current = parseFloat(state.display);
      const sub = Number.isFinite(current) ? current : 0;
      return { ...state, memory: state.memory - sub };
    }
    case "equals": {
      if (state.mode === "expr") {
        const t = [...state.tokens];
        if (!state.waitingForOperand) t.push(state.display);
        if (t.length === 0) return state;
        const result = evaluateTokens(t);
        const formatted = safeResultDisplay(result, state.rounding);
        if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true, memory: state.memory, mode: state.mode };
        return {
          ...state,
          display: formatted,
          expression: `${t.join(" ")} = ${formatted}`,
          waitingForOperand: true,
          tokens: [],
          previous: null,
          operator: null,
          repeat: null,
        };
      }

      // Normal equals: compute using previous/operator/current
      if (state.previous !== null && state.operator !== null) {
        const current = parseFloat(state.display) || 0;
        const result = compute(state.previous, state.operator, current);
        const formatted = safeResultDisplay(result, state.rounding);
        if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true };
        return {
          display: formatted,
          expression: state.expression + " = " + formatted,
          previous: null,
          operator: null,
          waitingForOperand: true,
          memory: state.memory,
          repeat: { operator: state.operator, operand: current },
          mode: state.mode,
          tokens: state.tokens,
          rounding: state.rounding,
        };
      }

      // Repeat equals: apply last operator/operand again
      if (state.repeat) {
        const left = parseFloat(state.display) || 0;
        const result = compute(left, state.repeat.operator, state.repeat.operand);
        const formatted = safeResultDisplay(result, state.rounding);
        if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true };
        return {
          ...state,
          display: formatted,
          expression: `${formatDisplay(left)} ${opSymbol(state.repeat.operator)} ${formatDisplay(state.repeat.operand)} = ${formatted}`,
          waitingForOperand: true,
        };
      }

      return state;
    }
    default:
      return state;
  }
}

type KeyKind = "function" | "number" | "operator" | "equals";

const KEY_ROWS: { id: string; label: string; action: Action; kind: KeyKind }[][] = [
  [
    { id: "ac", label: "AC", action: { type: "allClear" }, kind: "function" },
    { id: "bksp", label: "⌫", action: { type: "backspace" }, kind: "function" },
    { id: "pct", label: "%", action: { type: "percent" }, kind: "function" },
    { id: "div", label: "÷", action: { type: "operator", payload: "÷" }, kind: "operator" },
  ],
  [
    { id: "7", label: "7", action: { type: "digit", payload: "7" }, kind: "number" },
    { id: "8", label: "8", action: { type: "digit", payload: "8" }, kind: "number" },
    { id: "9", label: "9", action: { type: "digit", payload: "9" }, kind: "number" },
    { id: "mul", label: "×", action: { type: "operator", payload: "×" }, kind: "operator" },
  ],
  [
    { id: "4", label: "4", action: { type: "digit", payload: "4" }, kind: "number" },
    { id: "5", label: "5", action: { type: "digit", payload: "5" }, kind: "number" },
    { id: "6", label: "6", action: { type: "digit", payload: "6" }, kind: "number" },
    { id: "sub", label: "−", action: { type: "operator", payload: "−" }, kind: "operator" },
  ],
  [
    { id: "1", label: "1", action: { type: "digit", payload: "1" }, kind: "number" },
    { id: "2", label: "2", action: { type: "digit", payload: "2" }, kind: "number" },
    { id: "3", label: "3", action: { type: "digit", payload: "3" }, kind: "number" },
    { id: "add", label: "+", action: { type: "operator", payload: "+" }, kind: "operator" },
  ],
  [
    { id: "neg", label: "±", action: { type: "negate" }, kind: "number" },
    { id: "0", label: "0", action: { type: "digit", payload: "0" }, kind: "number" },
    { id: "dot", label: ".", action: { type: "decimal" }, kind: "number" },
    { id: "eq", label: "=", action: { type: "equals" }, kind: "equals" },
  ],
];

function keyClass(kind: KeyKind): string {
  const base =
    "flex items-center justify-center rounded-2xl text-xl font-medium text-white transition-shadow duration-150 sm:text-2xl";
  const size = "min-h-[56px] sm:min-h-[60px] lg:min-h-[52px]";
  const kindClass =
    kind === "function"
      ? "calc-key-function"
      : kind === "operator"
        ? "calc-key-operator"
        : kind === "equals"
          ? "calc-key-equals"
          : "calc-key-number";
  return `${base} ${size} ${kindClass}`;
}

function getActionFromKeyEvent(key: string): Action | null {
  if (/^[0-9]$/.test(key)) return { type: "digit", payload: key };
  if (key === "." || key === ",") return { type: "decimal" };
  if (key === "+") return { type: "operator", payload: "+" };
  if (key === "-") return { type: "operator", payload: "−" };
  if (key === "*") return { type: "operator", payload: "×" };
  if (key === "/") return { type: "operator", payload: "÷" };
  if (key === "%") return { type: "percent" };
  if (key === "Enter" || key === "=") return { type: "equals" };
  if (key === "Escape") return { type: "allClear" };
  if (key === "Backspace") return { type: "backspace" };
  if (key === "Delete") return { type: "clear" };
  return null;
}

export function BasicCalculator() {
  const [state, dispatch] = useReducer(reducer, INIT, (init) => ({
    ...init,
    memory: typeof window === "undefined" ? 0 : loadMemory(),
  }));

  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>(() =>
    typeof window === "undefined" ? [] : loadHistory()
  );
  const [toast, setToast] = useState<string | null>(null);
  const [srAnnouncement, setSrAnnouncement] = useState<string>("");

  useEffect(() => {
    if (toast) {
      const t = window.setTimeout(() => setToast(null), 1200);
      return () => window.clearTimeout(t);
    }
  }, [toast]);

  useEffect(() => {
    if (srAnnouncement) {
      const t = window.setTimeout(() => setSrAnnouncement(""), 1500);
      return () => window.clearTimeout(t);
    }
  }, [srAnnouncement]);

  const handleKey = useCallback((action: Action) => {
    playClick();

    if (action.type === "equals") {
      if (state.mode === "expr") {
        const t = [...state.tokens];
        if (!state.waitingForOperand) t.push(state.display);
        if (t.length) {
          const resN = evaluateTokens(t);
          const res = safeResultDisplay(resN, state.rounding);
          if (res !== "Error") {
            setSrAnnouncement(`Result ${res}`);
            const item: HistoryItem = {
              id: crypto.randomUUID(),
              expression: t.join(" "),
              result: res,
              ts: Date.now(),
            };
            setHistory((prev) => [item, ...prev].slice(0, 50));
          }
        }
      } else if (state.previous !== null && state.operator !== null) {
        const expr = buildExpression(state.previous, state.operator, state.display);
        const res = safeResultDisplay(
          compute(state.previous, state.operator, parseFloat(state.display) || 0),
          state.rounding
        );
        if (res !== "Error") {
          setSrAnnouncement(`Result ${res}`);
          const item: HistoryItem = {
            id: crypto.randomUUID(),
            expression: expr,
            result: res,
            ts: Date.now(),
          };
          setHistory((prev) => [item, ...prev].slice(0, 50));
        }
      }
    }
    dispatch(action);
  }, [
    state.display,
    state.mode,
    state.operator,
    state.previous,
    state.tokens,
    state.waitingForOperand,
  ]);

  const canShare = useMemo(() => typeof navigator !== "undefined" && !!(navigator as any).share, []);

  useEffect(() => {
    if (typeof window !== "undefined") saveMemory(state.memory);
  }, [state.memory]);

  useEffect(() => {
    if (typeof window !== "undefined") saveHistory(history);
  }, [history]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable)
      ) {
        return;
      }
      const action = getActionFromKeyEvent(e.key);
      if (action) {
        e.preventDefault();
        playClick();
        dispatch(action);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="calculator-shell mx-auto w-full max-w-[min(100vw-1rem,420px)] select-none rounded-[2rem] p-4 shadow-2xl sm:max-w-[520px] sm:p-5 lg:max-w-[620px] lg:p-5"
      role="application"
      aria-label="Basic calculator"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {srAnnouncement}
      </p>
      {/* Screen bezel */}
      <div className="calculator-screen mb-4 rounded-2xl border border-zinc-800/80 px-4 py-5">
        <div className="flex items-center justify-end">
          {state.memory !== 0 ? (
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
              M
            </span>
          ) : (
            <span className="h-[18px]" aria-hidden="true" />
          )}
        </div>
        {state.expression ? (
          <p
            className="min-h-[1.25rem] truncate text-right text-sm tabular-nums text-zinc-500"
          >
            {state.expression}
          </p>
        ) : (
          <p className="min-h-[1.25rem]" aria-hidden="true" />
        )}
        <p
          className="calculator-screen-text min-h-[3.5rem] truncate text-right font-mono text-4xl font-light tabular-nums text-white sm:min-h-[4rem] sm:text-5xl"
        >
          {state.display}
        </p>
      </div>

      {/* Memory row */}
      <div className="mb-3 grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { id: "mc", label: "MC", action: { type: "memoryClear" } as Action },
          { id: "mr", label: "MR", action: { type: "memoryRecall" } as Action },
          { id: "mplus", label: "M+", action: { type: "memoryAdd" } as Action },
          { id: "mminus", label: "M-", action: { type: "memorySub" } as Action },
        ].map((k) => (
          <button
            key={k.id}
            type="button"
            className="calc-key-function flex min-h-[44px] items-center justify-center rounded-2xl text-sm font-semibold tracking-wide text-white"
            onClick={() => handleKey(k.action)}
          >
            {k.label}
          </button>
        ))}
      </div>

      {/* Actions row */}
      <div className="mb-3 grid grid-cols-3 gap-2 sm:gap-3">
        <button
          type="button"
          className="calc-key-function flex min-h-[44px] items-center justify-center rounded-2xl text-sm font-semibold text-white"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(state.display);
              setToast("Copied");
            } catch {
              setToast("Copy failed");
            }
          }}
        >
          Copy
        </button>
        <button
          type="button"
          className="calc-key-function flex min-h-[44px] items-center justify-center rounded-2xl text-sm font-semibold text-white"
          onClick={async () => {
            const text = state.display;
            if (canShare) {
              try {
                await (navigator as any).share({ text });
                return;
              } catch {
                // fall back
              }
            }
            try {
              await navigator.clipboard.writeText(text);
              setToast("Copied");
            } catch {
              setToast("Share failed");
            }
          }}
        >
          Share
        </button>
        <button
          type="button"
          className="calc-key-function flex min-h-[44px] items-center justify-center rounded-2xl text-sm font-semibold text-white"
          onClick={() => setHistoryOpen(true)}
        >
          History
        </button>
      </div>

      {/* Keypad */}
      <div className="grid gap-2 sm:gap-3">
        {KEY_ROWS.map((row, ri) => (
          <div key={ri} className="grid grid-cols-4 gap-2 sm:gap-3">
            {row.map((key) => (
              <button
                key={key.id}
                type="button"
                className={keyClass(key.kind)}
                onClick={() => handleKey(key.action)}
                aria-label={key.label === "−" ? "minus" : key.label === "×" ? "multiply" : key.label === "÷" ? "divide" : key.label}
              >
                {key.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Toast */}
      {toast ? (
        <div className="pointer-events-none mt-4 flex justify-center">
          <div className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
            {toast}
          </div>
        </div>
      ) : null}

      {/* History drawer */}
      {historyOpen ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close history"
            onClick={() => setHistoryOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-md rounded-t-3xl border border-stone-800 bg-stone-950 p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-stone-100">History</p>
                <p className="mt-0.5 text-xs text-stone-500">
                  Shortcuts: <span className="font-mono">Enter</span>=equals, <span className="font-mono">Backspace</span>=⌫, <span className="font-mono">Del</span>=C, <span className="font-mono">Esc</span>=AC
                </p>
              </div>
              <button
                type="button"
                className="rounded-xl px-3 py-2 text-sm text-stone-300 hover:bg-stone-800/60"
                onClick={() => {
                  setHistory([]);
                  setToast("Cleared");
                }}
              >
                Clear
              </button>
            </div>
            <div className="max-h-[50vh] overflow-auto pr-1">
              {history.length === 0 ? (
                <p className="py-10 text-center text-sm text-stone-500">No history yet</p>
              ) : (
                <ul className="space-y-2">
                  {history.map((h) => (
                    <li key={h.id}>
                      <button
                        type="button"
                        className="w-full rounded-2xl border border-stone-800 bg-stone-900/40 p-3 text-left hover:bg-stone-900/70"
                        onClick={() => {
                          dispatch({ type: "allClear" });
                          dispatch({ type: "setEntry", payload: h.result });
                          setHistoryOpen(false);
                        }}
                      >
                        <p className="truncate text-xs text-stone-400">{h.expression}</p>
                        <p className="mt-1 font-mono text-lg text-stone-100">{h.result}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="rounded-2xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setHistoryOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
