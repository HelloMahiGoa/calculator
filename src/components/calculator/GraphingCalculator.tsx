"use client";

import { useEffect, useRef, useState } from "react";

type Viewport = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

type Theme = "dark";

const DEFAULT_VIEW: Viewport = {
  xMin: -10,
  xMax: 10,
  yMin: -6,
  yMax: 6,
};

const PRESETS: { label: string; expr: string }[] = [
  { label: "Parabola", expr: "x^2 / 4" },
  { label: "Sine wave", expr: "2 * sin(x)" },
  { label: "Cosine", expr: "2 * cos(x)" },
  { label: "Cubic", expr: "0.1 * x^3 - x" },
];

function buildFn(expr: string): ((x: number) => number) | null {
  const cleaned = expr
    .replace(/ /g, "")
    .replace(/(\b)(sin|cos|tan|log|ln|sqrt|abs)/g, (m, lead, fn) => {
      if (fn === "ln") return `${lead}Math.log`;
      if (fn === "log") return `${lead}Math.log10`;
      if (fn === "sqrt") return `${lead}Math.sqrt`;
      if (fn === "abs") return `${lead}Math.abs`;
      return `${lead}Math.${fn}`;
    })
    .replace(/\^/g, "**");

  if (!/^[0-9x+\-*/().,^A-Za-z]*$/.test(cleaned)) return null;

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("x", `return ${cleaned};`) as (x: number) => number;
    // Quick test
    void fn(0);
    return fn;
  } catch {
    return null;
  }
}

function drawAxes(ctx: CanvasRenderingContext2D, width: number, height: number, view: Viewport, theme: Theme) {
  ctx.clearRect(0, 0, width, height);

  const bg = theme === "dark" ? "#02010a" : "#ffffff";
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const toPxX = (x: number) => ((x - view.xMin) / (view.xMax - view.xMin)) * width;
  const toPxY = (y: number) => height - ((y - view.yMin) / (view.yMax - view.yMin)) * height;

  ctx.strokeStyle = "rgba(148,163,184,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();

  const step = 1;
  for (let x = Math.ceil(view.xMin); x <= view.xMax; x += step) {
    const px = toPxX(x);
    ctx.moveTo(px, 0);
    ctx.lineTo(px, height);
  }
  for (let y = Math.ceil(view.yMin); y <= view.yMax; y += step) {
    const py = toPxY(y);
    ctx.moveTo(0, py);
    ctx.lineTo(width, py);
  }
  ctx.stroke();

  // Axes
  ctx.strokeStyle = "rgba(148,163,184,0.6)";
  ctx.lineWidth = 1.25;
  ctx.beginPath();
  if (view.yMin < 0 && view.yMax > 0) {
    const y0 = toPxY(0);
    ctx.moveTo(0, y0);
    ctx.lineTo(width, y0);
  }
  if (view.xMin < 0 && view.xMax > 0) {
    const x0 = toPxX(0);
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, height);
  }
  ctx.stroke();
}

function drawFunction(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  view: Viewport,
  fn: (x: number) => number,
) {
  const toPxX = (x: number) => ((x - view.xMin) / (view.xMax - view.xMin)) * width;
  const toPxY = (y: number) => height - ((y - view.yMin) / (view.yMax - view.yMin)) * height;

  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 2;
  ctx.beginPath();

  const samples = width;
  let started = false;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const x = view.xMin + t * (view.xMax - view.xMin);
    let y = fn(x);
    if (!Number.isFinite(y)) {
      started = false;
      continue;
    }
    // Clamp extremely large values
    if (y > view.yMax * 4 || y < view.yMin * 4) {
      started = false;
      continue;
    }
    const px = toPxX(x);
    const py = toPxY(y);
    if (!started) {
      ctx.moveTo(px, py);
      started = true;
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();
}

export function GraphingCalculator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [expr, setExpr] = useState("x^2 / 4");
  const [view, setView] = useState<Viewport>(DEFAULT_VIEW);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const fn = buildFn(expr);
    drawAxes(ctx, rect.width, rect.height, view, "dark");
    if (!fn) {
      setError("Could not parse this expression. Try using x, +, -, *, /, ^ and sin/cos/tan/log/sqrt.");
      return;
    }
    setError(null);
    drawFunction(ctx, rect.width, rect.height, view, fn);

    // Draw cursor crosshair if present
    if (cursor) {
      const toPxX = (x: number) => ((x - view.xMin) / (view.xMax - view.xMin)) * rect.width;
      const toPxY = (y: number) => rect.height - ((y - view.yMin) / (view.yMax - view.yMin)) * rect.height;
      const cx = toPxX(cursor.x);
      const cy = toPxY(cursor.y);
      ctx.strokeStyle = "rgba(96,165,250,0.7)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, rect.height);
      ctx.moveTo(0, cy);
      ctx.lineTo(rect.width, cy);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [expr, view, cursor]);

  function zoom(factor: number) {
    setView((v) => {
      const cx = (v.xMin + v.xMax) / 2;
      const cy = (v.yMin + v.yMax) / 2;
      const nx = (v.xMax - v.xMin) * factor;
      const ny = (v.yMax - v.yMin) * factor;
      return {
        xMin: cx - nx / 2,
        xMax: cx + nx / 2,
        yMin: cy - ny / 2,
        yMax: cy + ny / 2,
      };
    });
  }

  function pan(dx: number, dy: number) {
    setView((v) => ({
      xMin: v.xMin + dx,
      xMax: v.xMax + dx,
      yMin: v.yMin + dy,
      yMax: v.yMax + dy,
    }));
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const el: HTMLCanvasElement = canvas;

    function toWorldCoords(
      canvasEl: HTMLCanvasElement,
      clientX: number,
      clientY: number,
    ): { x: number; y: number } | null {
      const rect = canvasEl.getBoundingClientRect();
      const px = clientX - rect.left;
      const py = clientY - rect.top;
      if (px < 0 || py < 0 || px > rect.width || py > rect.height) return null;
      const x = view.xMin + (px / rect.width) * (view.xMax - view.xMin);
      const y = view.yMax - (py / rect.height) * (view.yMax - view.yMin);
      return { x, y };
    }

    let isDragging = false;
    let last: { x: number; y: number } | null = null;

    function onMouseMove(e: MouseEvent) {
      const world = toWorldCoords(el, e.clientX, e.clientY);
      if (world) setCursor(world);

      if (isDragging && last && world) {
        const dx = last.x - world.x;
        const dy = last.y - world.y;
        pan(dx, dy);
      }
      if (world) last = world;
    }

    function onMouseDown(e: MouseEvent) {
      const world = toWorldCoords(el, e.clientX, e.clientY);
      if (!world) return;
      isDragging = true;
      last = world;
    }

    function onMouseUp() {
      isDragging = false;
      last = null;
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const world = toWorldCoords(el, e.clientX, e.clientY);
      const factor = e.deltaY < 0 ? 0.85 : 1.15;
      setView((v) => {
        const cx = world ? world.x : (v.xMin + v.xMax) / 2;
        const cy = world ? world.y : (v.yMin + v.yMax) / 2;
        const nx = (v.xMax - v.xMin) * factor;
        const ny = (v.yMax - v.yMin) * factor;
        return {
          xMin: cx - nx / 2,
          xMax: cx + nx / 2,
          yMin: cy - ny / 2,
          yMax: cy + ny / 2,
        };
      });
    }

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [view]);

  return (
    <div className="space-y-3 rounded-3xl border border-stone-800/80 bg-gradient-to-b from-stone-950/90 via-stone-950 to-stone-950/95 p-3 sm:p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Graphing calculator
          </p>
          <p className="text-[12px] text-stone-400">
            Enter a function of <span className="font-mono text-stone-200">x</span> to plot it. Try{" "}
            <span className="font-mono text-amber-200">sin(x)</span> or{" "}
            <span className="font-mono text-amber-200">x^3 - x</span>.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 text-[11px]">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              className="rounded-full border border-stone-700/80 bg-stone-900/80 px-2.5 py-1 text-[11px] text-stone-200 hover:border-amber-400/70 hover:text-amber-100"
              onClick={() => setExpr(p.expr)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="flex-1 text-[12px] text-stone-300">
          <span className="mb-1 inline-block text-[11px] uppercase tracking-[0.18em] text-stone-500">
            f(x)
          </span>
          <input
            className="mt-1 w-full rounded-xl border border-stone-800 bg-stone-950 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-600"
            value={expr}
            onChange={(e) => setExpr(e.target.value)}
            placeholder="e.g. x^2 / 4 or 2 * sin(x)"
          />
        </label>
        <div className="flex gap-1 text-[11px]">
          <button
            type="button"
            className="rounded-lg border border-stone-800 bg-stone-950 px-2.5 py-1.5 text-stone-200 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => zoom(0.7)}
          >
            Zoom in
          </button>
          <button
            type="button"
            className="rounded-lg border border-stone-800 bg-stone-950 px-2.5 py-1.5 text-stone-200 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => zoom(1.4)}
          >
            Zoom out
          </button>
          <button
            type="button"
            className="rounded-lg border border-stone-800 bg-stone-950 px-2.5 py-1.5 text-stone-200 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => setView(DEFAULT_VIEW)}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500">
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            className="rounded-full border border-stone-800 px-2 py-0.5 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => pan(-1, 0)}
          >
            ←
          </button>
          <button
            type="button"
            className="rounded-full border border-stone-800 px-2 py-0.5 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => pan(1, 0)}
          >
            →
          </button>
          <button
            type="button"
            className="rounded-full border border-stone-800 px-2 py-0.5 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => pan(0, 1)}
          >
            ↓
          </button>
          <button
            type="button"
            className="rounded-full border border-stone-800 px-2 py-0.5 hover:border-amber-400/70 hover:text-amber-100"
            onClick={() => pan(0, -1)}
          >
            ↑
          </button>
        </div>
        <p className="text-[11px] text-stone-500">
          View: x [{view.xMin.toFixed(1)}, {view.xMax.toFixed(1)}], y [{view.yMin.toFixed(1)}, {view.yMax.toFixed(1)}]
        </p>
      </div>
      {error ? (
        <p className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-[11px] text-rose-200">
          {error}
        </p>
      ) : null}
      <div className="mt-1 h-56 overflow-hidden rounded-2xl border border-stone-800 bg-black/90 sm:h-64">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </div>
  );
}

