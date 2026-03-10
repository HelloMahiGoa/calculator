"use client";

import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

type Operator = "+" | "−" | "×" | "÷";

type Action =
  | { type: "digit"; payload: string }
  | { type: "decimal" }
  | { type: "operator"; payload: Operator }
  | { type: "percent" }
  | { type: "negate" }
  | { type: "backspace" }
  | { type: "clear" }
  | { type: "allClear" }
  | { type: "memoryClear" }
  | { type: "memoryRecall" }
  | { type: "memoryAdd" }
  | { type: "memorySub" }
  | { type: "equals" }
  | { type: "unary"; payload: "square" | "sqrt" | "inv" | "cube" | "cuberoot" | "sin" | "cos" | "tan" | "log10" | "ln" }
  | { type: "toggleAngleMode" };

type AngleMode = "deg" | "rad";

interface State {
  display: string;
  expression: string;
  previous: number | null;
  operator: Operator | null;
  waitingForOperand: boolean;
  memory: number;
  angleMode: AngleMode;
}

const MAX_DISPLAY_LENGTH = 14;

const INIT: State = {
  display: "0",
  expression: "",
  previous: null,
  operator: null,
  waitingForOperand: true,
  memory: 0,
  angleMode: "deg",
};

function formatDisplay(value: number): string {
  if (!Number.isFinite(value)) return "Error";
  const s = String(value);
  if (s.length > MAX_DISPLAY_LENGTH) {
    if (Math.abs(value) >= 1e12 || (Math.abs(value) < 1e-6 && value !== 0)) {
      return value.toExponential(8);
    }
    return value.toPrecision(MAX_DISPLAY_LENGTH - 2);
  }
  return s;
}

function compute(a: number, op: Operator, b: number): number {
  switch (op) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? Number.NaN : a / b;
    default:  return b;
  }
}

function opSymbol(op: Operator) {
  return { "+": "+", "−": "−", "×": "×", "÷": "÷" }[op];
}

function toRadians(n: number, mode: AngleMode) {
  return mode === "deg" ? (n * Math.PI) / 180 : n;
}

function unaryApply(n: number, kind: Action["payload"], mode: AngleMode): number {
  switch (kind) {
    case "square": return n * n;
    case "cube": return n * n * n;
    case "sqrt": return n < 0 ? Number.NaN : Math.sqrt(n);
    case "cuberoot": return Math.cbrt(n);
    case "inv": return n === 0 ? Number.NaN : 1 / n;
    case "sin": return Math.sin(toRadians(n, mode));
    case "cos": return Math.cos(toRadians(n, mode));
    case "tan": return Math.tan(toRadians(n, mode));
    case "log10": return n <= 0 ? Number.NaN : Math.log10(n);
    case "ln": return n <= 0 ? Number.NaN : Math.log(n);
    default: return n;
  }
}

function buildExpression(previous: number | null, operator: Operator | null, entry: string) {
  if (previous === null || operator === null) return entry;
  return `${formatDisplay(previous)} ${opSymbol(operator)} ${entry}`;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "digit": {
      const d = action.payload;
      if (state.waitingForOperand) {
        return {
          ...state,
          display: d === "0" ? "0" : d,
          expression: state.expression + d,
          waitingForOperand: false,
        };
      }
      const next = state.display === "0" && d !== "0" ? d : state.display + d;
      if (next.length > MAX_DISPLAY_LENGTH) return state;
      return {
        ...state,
        display: next,
        expression: state.expression + d,
      };
    }
    case "decimal": {
      if (state.waitingForOperand) {
        return {
          ...state,
          display: "0.",
          expression: state.expression + "0.",
          waitingForOperand: false,
        };
      }
      if (state.display.includes(".")) return state;
      const next = state.display + ".";
      return { ...state, display: next, expression: state.expression + ".", waitingForOperand: false };
    }
    case "operator": {
      const op = action.payload;
      const current = parseFloat(state.display) || 0;
      const sym = opSymbol(op);

      if (state.previous !== null && state.operator && !state.waitingForOperand) {
        const result = compute(state.previous, state.operator, current);
        const formatted = formatDisplay(result);
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
      };
    }
    case "percent": {
      const n = parseFloat(state.display) || 0;
      const previous = state.previous;
      const operator = state.operator;
      const value =
        previous !== null && operator !== null
          ? operator === "+" || operator === "−"
            ? (previous * n) / 100
            : n / 100
          : n / 100;

      const formatted = formatDisplay(value);
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
      return { ...INIT, memory: state.memory, angleMode: state.angleMode };
    }
    case "memoryClear": {
      return { ...state, memory: 0 };
    }
    case "memoryRecall": {
      const formatted = formatDisplay(state.memory);
      if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true, memory: state.memory, angleMode: state.angleMode };
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
    case "unary": {
      const current = parseFloat(state.display);
      if (!Number.isFinite(current)) return state;
      const result = unaryApply(current, action.payload, state.angleMode);
      const formatted = formatDisplay(result);
      if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true, memory: state.memory, angleMode: state.angleMode };
      return {
        ...state,
        display: formatted,
        expression: formatted,
        previous: null,
        operator: null,
        waitingForOperand: true,
      };
    }
    case "toggleAngleMode": {
      return { ...state, angleMode: state.angleMode === "deg" ? "rad" : "deg" };
    }
    case "equals": {
      if (state.previous !== null && state.operator !== null) {
        const current = parseFloat(state.display) || 0;
        const result = compute(state.previous, state.operator, current);
        const formatted = formatDisplay(result);
        if (formatted === "Error") return { ...INIT, display: "Error", waitingForOperand: true, memory: state.memory, angleMode: state.angleMode };
        return {
          ...state,
          display: formatted,
          expression: `${buildExpression(state.previous, state.operator, state.display)} = ${formatted}`,
          previous: null,
          operator: null,
          waitingForOperand: true,
        };
      }
      return state;
    }
    default:
      return state;
  }
}

type KeyKind = "function" | "number" | "operator" | "equals" | "scientific";

type KeyDef = {
  id: string;
  label: string;
  action: Action;
  kind: KeyKind;
};

const SCI_ROW: KeyDef[] = [
  { id: "deg", label: "DEG/RAD", action: { type: "toggleAngleMode" }, kind: "scientific" },
  { id: "sin", label: "sin", action: { type: "unary", payload: "sin" }, kind: "scientific" },
  { id: "cos", label: "cos", action: { type: "unary", payload: "cos" }, kind: "scientific" },
  { id: "tan", label: "tan", action: { type: "unary", payload: "tan" }, kind: "scientific" },
];

const SCI_ROW_2: KeyDef[] = [
  { id: "square", label: "x²", action: { type: "unary", payload: "square" }, kind: "scientific" },
  { id: "sqrt", label: "√x", action: { type: "unary", payload: "sqrt" }, kind: "scientific" },
  { id: "inv", label: "1/x", action: { type: "unary", payload: "inv" }, kind: "scientific" },
  { id: "cube", label: "x³", action: { type: "unary", payload: "cube" }, kind: "scientific" },
];

const SCI_ROW_3: KeyDef[] = [
  { id: "cuberoot", label: "³√x", action: { type: "unary", payload: "cuberoot" }, kind: "scientific" },
  { id: "log10", label: "log", action: { type: "unary", payload: "log10" }, kind: "scientific" },
  { id: "ln", label: "ln", action: { type: "unary", payload: "ln" }, kind: "scientific" },
  { id: "pi", label: "π", action: { type: "digit", payload: String(Math.PI) }, kind: "scientific" },
];

const KEY_ROWS: KeyDef[][] = [
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
    "flex items-center justify-center rounded-2xl text-sm sm:text-base font-medium text-white transition-shadow duration-150";
  const size = "min-h-[44px] sm:min-h-[48px] lg:min-h-[44px]";
  const kindClass =
    kind === "function"
      ? "calc-key-function"
      : kind === "operator"
        ? "calc-key-operator"
        : kind === "equals"
          ? "calc-key-equals"
          : kind === "scientific"
            ? "calc-key-function"
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

export function ScientificCalculator() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1200);
    return () => window.clearTimeout(t);
  }, [toast]);

  const handleKey = useCallback((action: Action) => {
    dispatch(action);
  }, []);

  const canShare = useMemo(
    () => typeof navigator !== "undefined" && !!(navigator as any).share,
    []
  );

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
        dispatch(action);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="calculator-shell mx-auto w-full max-w-[min(100vw-1rem,460px)] select-none rounded-[2rem] p-4 shadow-2xl sm:max-w-[560px] sm:p-5 lg:max-w-[640px] lg:p-6"
      role="application"
      aria-label="Scientific calculator"
    >
      {/* Screen */}
      <div className="calculator-screen mb-3 rounded-2xl border border-zinc-800/80 px-4 py-4">
        <div className="flex items-center justify-between text-[11px] text-zinc-500">
          <span className="rounded-full bg-stone-900/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-stone-400">
            {state.angleMode === "deg" ? "DEG" : "RAD"}
          </span>
          {state.memory !== 0 ? (
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
              M
            </span>
          ) : (
            <span className="h-[18px]" aria-hidden="true" />
          )}
        </div>
        {state.expression ? (
          <p className="mt-1 min-h-[1.25rem] truncate text-right text-xs tabular-nums text-zinc-500">
            {state.expression}
          </p>
        ) : (
          <p className="mt-1 min-h-[1.25rem]" aria-hidden="true" />
        )}
        <p className="calculator-screen-text mt-1 min-h-[3rem] truncate text-right font-mono text-3xl font-light tabular-nums text-white sm:text-4xl">
          {state.display}
        </p>
      </div>

      {/* Scientific rows */}
      <div className="mb-2 grid grid-cols-4 gap-2 sm:gap-3 text-xs">
        {SCI_ROW.map((k) => (
          <button
            key={k.id}
            type="button"
            className={keyClass(k.kind)}
            onClick={() => handleKey(k.action)}
          >
            {k.id === "deg" ? state.angleMode.toUpperCase() : k.label}
          </button>
        ))}
      </div>
      <div className="mb-2 grid grid-cols-4 gap-2 sm:gap-3 text-xs">
        {SCI_ROW_2.map((k) => (
          <button
            key={k.id}
            type="button"
            className={keyClass(k.kind)}
            onClick={() => handleKey(k.action)}
          >
            {k.label}
          </button>
        ))}
      </div>
      <div className="mb-3 grid grid-cols-4 gap-2 sm:gap-3 text-xs">
        {SCI_ROW_3.map((k) => (
          <button
            key={k.id}
            type="button"
            className={keyClass(k.kind)}
            onClick={() => handleKey(k.action)}
          >
            {k.label}
          </button>
        ))}
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
            className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold tracking-wide text-white sm:text-sm"
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
          className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
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
          className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
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
          className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
          onClick={() => dispatch({ type: "allClear" })}
        >
          Reset
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
                aria-label={
                  key.label === "−"
                    ? "minus"
                    : key.label === "×"
                      ? "multiply"
                      : key.label === "÷"
                        ? "divide"
                        : key.label
                }
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
    </div>
  );
}

