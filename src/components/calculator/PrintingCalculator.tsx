"use client";

import { useEffect, useMemo, useReducer, useState } from "react";

type Operator = "+" | "−" | "×" | "÷";

type Action =
  | { type: "digit"; payload: string }
  | { type: "decimal" }
  | { type: "operator"; payload: Operator }
  | { type: "equals" }
  | { type: "percent" }
  | { type: "negate" }
  | { type: "clearEntry" }
  | { type: "allClear" }
  | { type: "backspace" }
  | { type: "setFromSubtotal"; payload: number }
  | { type: "noop" };

type Line = {
  id: string;
  left: string;
  op: Operator | null;
  right: string;
  subtotal: number;
};

interface State {
  display: string;
  previous: number | null;
  operator: Operator | null;
  waitingForOperand: boolean;
  tape: Line[];
}

const MAX_DISPLAY_LENGTH = 14;

const INIT: State = {
  display: "0",
  previous: null,
  operator: null,
  waitingForOperand: true,
  tape: [],
};

function compute(a: number, op: Operator, b: number): number {
  switch (op) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? Number.NaN : a / b;
    default:  return b;
  }
}

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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "digit": {
      const d = action.payload;
      if (state.waitingForOperand) {
        return {
          ...state,
          display: d === "0" ? "0" : d,
          waitingForOperand: false,
        };
      }
      const next = state.display === "0" && d !== "0" ? d : state.display + d;
      if (next.length > MAX_DISPLAY_LENGTH) return state;
      return { ...state, display: next };
    }
    case "decimal": {
      if (state.waitingForOperand) {
        return { ...state, display: "0.", waitingForOperand: false };
      }
      if (state.display.includes(".")) return state;
      const next = state.display + ".";
      return { ...state, display: next };
    }
    case "negate": {
      const n = parseFloat(state.display);
      if (!Number.isFinite(n) || n === 0) return state;
      return { ...state, display: formatDisplay(-n) };
    }
    case "backspace": {
      if (state.waitingForOperand) return state;
      if (state.display === "Error") return INIT;
      const next =
        state.display.length <= 1 || (state.display.length === 2 && state.display.startsWith("-"))
          ? "0"
          : state.display.slice(0, -1);
      return { ...state, display: next, waitingForOperand: next === "0" };
    }
    case "clearEntry": {
      return { ...state, display: "0", waitingForOperand: true };
    }
    case "allClear": {
      return INIT;
    }
    case "percent": {
      const n = parseFloat(state.display) || 0;
      const base = state.previous ?? 0;
      const value = (base * n) / 100;
      const formatted = formatDisplay(value);
      if (formatted === "Error") return { ...INIT, display: "Error" };
      return { ...state, display: formatted, waitingForOperand: false };
    }
    case "operator": {
      const op = action.payload;
      const current = parseFloat(state.display) || 0;

      // If we already have a previous + operator, finalize a line.
      if (state.previous !== null && state.operator !== null && !state.waitingForOperand) {
        const result = compute(state.previous, state.operator, current);
        const formatted = formatDisplay(result);
        const line: Line = {
          id: crypto.randomUUID(),
          left: formatDisplay(state.previous),
          op: state.operator,
          right: formatDisplay(current),
          subtotal: result,
        };
        return {
          display: formatted,
          previous: result,
          operator: op,
          waitingForOperand: true,
          tape: [...state.tape, line],
        };
      }

      // First operator after entering a number
      return {
        ...state,
        previous: current,
        operator: op,
        waitingForOperand: true,
      };
    }
    case "equals": {
      if (state.previous === null || state.operator === null || state.waitingForOperand) {
        return state;
      }
      const current = parseFloat(state.display) || 0;
      const result = compute(state.previous, state.operator, current);
      const formatted = formatDisplay(result);
      if (formatted === "Error") return { ...INIT, display: "Error" };
      const line: Line = {
        id: crypto.randomUUID(),
        left: formatDisplay(state.previous),
        op: state.operator,
        right: formatDisplay(current),
        subtotal: result,
      };
      return {
        display: formatted,
        previous: null,
        operator: null,
        waitingForOperand: true,
        tape: [...state.tape, line],
      };
    }
    case "setFromSubtotal": {
      const v = action.payload;
      return {
        ...state,
        display: formatDisplay(v),
        previous: v,
        operator: null,
        waitingForOperand: true,
      };
    }
    case "noop":
      return state;
    default:
      return state;
  }
}

type KeyKind = "function" | "number" | "operator" | "equals";

const KEY_ROWS: { id: string; label: string; action: Action; kind: KeyKind }[][] = [
  [
    { id: "ac", label: "AC", action: { type: "allClear" }, kind: "function" },
    { id: "c", label: "C", action: { type: "clearEntry" }, kind: "function" },
    { id: "bksp", label: "⌫", action: { type: "backspace" }, kind: "function" },
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
  if (key === "Delete") return { type: "clearEntry" };
  return null;
}

export function PrintingCalculator() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const [toast, setToast] = useState<string | null>(null);

  const subtotal = useMemo(
    () => (state.tape.length ? state.tape[state.tape.length - 1]!.subtotal : parseFloat(state.display) || 0),
    [state.tape, state.display],
  );

  const tapeText = useMemo(
    () =>
      state.tape
        .map((line) =>
          line.op
            ? `${line.left} ${line.op} ${line.right} = ${formatDisplay(line.subtotal)}`
            : `${line.left}`,
        )
        .join("\n"),
    [state.tape],
  );

  const handleKey = (action: Action) => {
    dispatch(action);
  };

  const canShare = useMemo(
    () => typeof navigator !== "undefined" && !!(navigator as any).share,
    [],
  );

  const handleCopyTape = async () => {
    if (!tapeText) return;
    try {
      await navigator.clipboard.writeText(tapeText);
      setToast("Tape copied");
    } catch {
      setToast("Copy failed");
    }
  };

  const handleUseSubtotal = () => {
    dispatch({ type: "setFromSubtotal", payload: subtotal });
  };

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1200);
    return () => window.clearTimeout(t);
  }, [toast]);

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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row">
      {/* Tape panel */}
      <div className="flex-1 rounded-3xl border border-stone-800/80 bg-stone-950/80 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
        <div className="mb-2 flex items-center justify-between text-xs text-stone-300">
          <p className="font-semibold text-stone-100">Tape</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full bg-stone-900/90 px-3 py-1 text-[11px] text-stone-300 hover:bg-stone-800/90"
              onClick={handleCopyTape}
              disabled={!tapeText}
            >
              Copy tape
            </button>
            <button
              type="button"
              className="rounded-full bg-stone-900/90 px-3 py-1 text-[11px] text-stone-300 hover:bg-stone-800/90"
              onClick={() => dispatch({ type: "allClear" })}
            >
              Clear all
            </button>
          </div>
        </div>
        <div className="h-64 overflow-y-auto rounded-2xl bg-black/40 p-3 text-xs text-stone-300 sm:h-72">
          {state.tape.length === 0 ? (
            <p className="mt-8 text-center text-stone-500">No lines yet. Start typing and press +, −, ×, ÷ or =.</p>
          ) : (
            <ul className="space-y-1">
              {state.tape.map((line) => (
                <li
                  key={line.id}
                  className="flex cursor-pointer items-baseline justify-between gap-2 rounded-xl px-2 py-1 hover:bg-stone-900/70"
                  onClick={() => dispatch({ type: "setFromSubtotal", payload: line.subtotal })}
                >
                  <span className="font-mono text-[11px] text-stone-400 truncate">
                    {line.op
                      ? `${line.left} ${line.op} ${line.right}`
                      : line.left}
                  </span>
                  <span className="font-mono text-[12px] text-stone-100">
                    {formatDisplay(line.subtotal)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-stone-300">
          <span className="text-stone-400">Current subtotal</span>
          <button
            type="button"
            className="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-stone-950 shadow-[0_10px_30px_rgba(251,191,36,0.55)] hover:bg-amber-400"
            onClick={handleUseSubtotal}
          >
            Use {formatDisplay(subtotal)}
          </button>
        </div>
      </div>

      {/* Printing calculator keypad */}
      <div className="flex-1">
        <div
          className="calculator-shell mx-auto w-full max-w-[min(100vw-1rem,420px)] select-none rounded-[2rem] p-4 shadow-2xl sm:max-w-[460px] sm:p-5"
          role="application"
          aria-label="Printing calculator"
        >
          <div className="calculator-screen mb-4 rounded-2xl border border-zinc-800/80 px-4 py-4">
            <p className="min-h-[1.25rem] truncate text-right text-xs tabular-nums text-zinc-500">
              {state.previous !== null && state.operator
                ? `${formatDisplay(state.previous)} ${state.operator}`
                : ""}
            </p>
            <p className="calculator-screen-text mt-1 min-h-[3.5rem] truncate text-right font-mono text-4xl font-light tabular-nums text-white sm:text-5xl">
              {state.display}
            </p>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2 sm:gap-3">
            <button
              type="button"
              className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
              onClick={async () => {
                if (!tapeText) return;
                if (canShare) {
                  try {
                    await (navigator as any).share({ text: tapeText });
                    return;
                  } catch {
                    // ignore
                  }
                }
                await handleCopyTape();
              }}
            >
              Share tape
            </button>
            <button
              type="button"
              className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
              onClick={() => dispatch({ type: "percent" })}
            >
              %
            </button>
            <button
              type="button"
              className="calc-key-function flex min-h-[40px] items-center justify-center rounded-2xl text-xs font-semibold text-white sm:text-sm"
              onClick={() => dispatch({ type: "noop" })}
              disabled
            >
              Tax (soon)
            </button>
          </div>

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
        </div>

        {toast ? (
          <div className="pointer-events-none mt-2 flex justify-center">
            <div className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
              {toast}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}