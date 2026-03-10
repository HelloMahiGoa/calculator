export function GraphingContent() {
  return (
    <div className="bg-gradient-to-b from-[#050509] via-[#080712] to-[#0b0a0f] px-4 pb-8 pt-4 sm:px-6 sm:pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/80 px-4 py-4 text-[12px] text-stone-400 sm:text-sm">
          <h2 className="text-sm font-semibold tracking-tight text-stone-100">
            What you can do with this graphing calculator
          </h2>
          <p>
            Use this online graphing calculator to plot functions of <span className="font-mono text-stone-100">x</span
            >, see how curves move when you change a formula and zoom into specific regions of the coordinate plane.
            It&apos;s ideal for algebra, trigonometry, pre‑calculus and quick visual checks while studying or teaching.
          </p>
          <p>
            You can work with polynomials, rational expressions, trigonometric functions, exponentials and logarithms
            using familiar notation such as <span className="font-mono text-amber-200">x^2</span>,{" "}
            <span className="font-mono text-amber-200">sqrt(x)</span>,{" "}
            <span className="font-mono text-amber-200">sin(x)</span> or{" "}
            <span className="font-mono text-amber-200">ln(x)</span>. Zoom and pan controls help you focus on
            intersections, turning points and asymptotic behaviour.
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/80 px-4 py-4 text-[12px] text-stone-400 sm:text-sm">
          <h2 className="text-sm font-semibold tracking-tight text-stone-100">
            Tips for entering functions
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-stone-200">Use x as your variable.</span> For example, enter{" "}
              <span className="font-mono text-amber-200">x^2 / 4</span> or{" "}
              <span className="font-mono text-amber-200">2 * sin(x)</span> to see a parabola or sine wave.
            </li>
            <li>
              <span className="font-semibold text-stone-200">Write powers with ^.</span>{" "}
              <span className="font-mono text-amber-200">x^3 - x</span> gives a cubic, and{" "}
              <span className="font-mono text-amber-200">2^x</span> produces an exponential curve.
            </li>
            <li>
              <span className="font-semibold text-stone-200">Use built‑in functions.</span>{" "}
              <span className="font-mono text-amber-200">sin(x)</span>,{" "}
              <span className="font-mono text-amber-200">cos(x)</span>,{" "}
              <span className="font-mono text-amber-200">tan(x)</span>,{" "}
              <span className="font-mono text-amber-200">log(x)</span>,{" "}
              <span className="font-mono text-amber-200">ln(x)</span> and{" "}
              <span className="font-mono text-amber-200">sqrt(x)</span> are all supported.
            </li>
          </ul>
        </section>

        <section className="space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/80 px-4 py-4 text-[12px] text-stone-400 sm:text-sm">
          <h2 className="text-sm font-semibold tracking-tight text-stone-100">
            When to use the graphing calculator vs. other tools
          </h2>
          <p>
            Reach for the graphing calculator whenever you need to understand the shape of a function, compare growth
            rates or check whether an equation seems reasonable before solving it by hand. For quick everyday sums, the
            basic calculator is faster; for detailed scientific keys and angle modes, switch to the scientific
            calculator instead.
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/80 px-4 py-4 text-[12px] text-stone-400 sm:text-sm">
          <h2 className="text-sm font-semibold tracking-tight text-stone-100">
            Example functions to try
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-stone-200">Parabolas and cubics.</span>{" "}
              <span className="font-mono text-amber-200">x^2</span>,{" "}
              <span className="font-mono text-amber-200">x^2 - 4</span> or{" "}
              <span className="font-mono text-amber-200">0.1 * x^3 - x</span> to see basic curves, roots and turning
              points.
            </li>
            <li>
              <span className="font-semibold text-stone-200">Trig waves.</span>{" "}
              <span className="font-mono text-amber-200">sin(x)</span>,{" "}
              <span className="font-mono text-amber-200">2 * sin(x) + cos(x)</span> or{" "}
              <span className="font-mono text-amber-200">sin(x) / x</span> (for x ≠ 0) to see amplitude and frequency
              changes.
            </li>
            <li>
              <span className="font-semibold text-stone-200">Growth and decay.</span>{" "}
              <span className="font-mono text-amber-200">2^x</span>,{" "}
              <span className="font-mono text-amber-200">e^x</span> (approximate with{" "}
              <span className="font-mono text-amber-200">2.71828^x</span>) or{" "}
              <span className="font-mono text-amber-200">0.5^x</span> to compare exponential behaviour.
            </li>
          </ul>
        </section>

        <section className="space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/80 px-4 py-4 text-[12px] text-stone-400 sm:text-sm">
          <h2 className="text-sm font-semibold tracking-tight text-stone-100">
            Frequently asked questions about graphing
          </h2>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-stone-200">Can I plot more than one function?</p>
              <p>
                Right now the calculator plots a single expression at a time, but you can quickly switch between
                different functions by editing the input or tapping presets.
              </p>
            </div>
            <div>
              <p className="font-semibold text-stone-200">Which angle units are used for trig?</p>
              <p>
                Trigonometric functions like <span className="font-mono text-amber-200">sin(x)</span> and{" "}
                <span className="font-mono text-amber-200">cos(x)</span> interpret <span className="font-mono">x</span>{" "}
                in radians. To work in degrees, convert first (for example{" "}
                <span className="font-mono text-amber-200">sin(x * π / 180)</span>).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

