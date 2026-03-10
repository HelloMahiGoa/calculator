export function ScientificContent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050509] via-[#040313] to-[#020208] px-4 py-12 text-stone-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-orb absolute -left-24 top-[-4rem] h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="floating-orb absolute right-[-4rem] top-32 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl space-y-10">
        <header className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-100 ring-1 ring-stone-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Scientific calculator explained
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What makes a calculator “scientific”?
          </h2>
          <p className="max-w-2xl text-sm text-stone-400">
            Scientific calculators build on the four basic operations with trigonometry, powers,
            roots, logarithms and constants, so you can tackle real maths, science and engineering
            problems.
          </p>
        </header>

        {/* History and origins */}
        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/60 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Who invented the scientific calculator?</h3>
            <p className="mt-2 text-sm text-stone-300">
              The first handheld scientific calculator is widely credited to Hewlett‑Packard. In 1972 the
              company released the HP‑35, a pocket‑sized calculator that could replace the engineer&apos;s slide
              rule by handling trigonometric, logarithmic and exponential functions.
            </p>
            <p className="mt-2 text-sm text-stone-300">
              The HP‑35 used then‑new integrated circuits to squeeze serious maths into a device that fit in a
              shirt pocket. Modern scientific calculators—physical and online—follow the same goal: bring
              advanced functions as close to you as a basic calculator.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Milestones in scientific calculators
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <span className="font-semibold text-stone-100">1972 – HP‑35:</span> first handheld scientific
                calculator.
              </li>
              <li>
                <span className="font-semibold text-stone-100">Late 1970s–1980s:</span> scientific calculators
                become standard tools in schools and universities.
              </li>
              <li>
                <span className="font-semibold text-stone-100">1985 onwards:</span> graphing and programmable
                models arrive, adding visuals and custom programs.
              </li>
              <li>
                <span className="font-semibold text-stone-100">Today:</span> scientific calculators live in web
                apps like this one alongside dedicated devices.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/60 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Core capabilities</h3>
            <p className="mt-2 text-sm text-stone-300">
              In addition to +, −, ×, ÷ and %, this scientific calculator adds functions that show
              up constantly in physics, engineering and exam questions.
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-300">
              <li>Trigonometry for angles (sin, cos, tan).</li>
              <li>Powers and roots (x², x³, √x, ³√x, 1/x).</li>
              <li>Logarithms in base 10 and base e (log, ln).</li>
              <li>Built‑in constants like π and e.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              When to use a scientific calculator
            </p>
            <p className="mt-2 text-sm text-stone-300">
              Use this page whenever a question involves angles, exponents, logs or roots. For
              simple money or shopping maths, the basic calculator is usually quicker.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5" aria-labelledby="sci-reference">
          <h3 id="sci-reference" className="text-lg font-semibold text-stone-100">
            Function reference
          </h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-800/80 bg-stone-950/80 text-xs">
            <table className="min-w-full border-collapse">
              <thead className="bg-stone-900/80 text-stone-200">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Key</th>
                  <th className="px-3 py-2 text-left font-semibold">Meaning</th>
                  <th className="px-3 py-2 text-left font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                <tr>
                  <td className="px-3 py-2 font-mono text-sky-200">sin, cos, tan</td>
                  <td className="px-3 py-2">Trigonometric functions in DEG or RAD mode.</td>
                  <td className="px-3 py-2 font-mono">sin(30°) = 0.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-emerald-200">x², x³</td>
                  <td className="px-3 py-2">Square or cube the current value.</td>
                  <td className="px-3 py-2 font-mono">5 x² → 25</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-emerald-200">√x, ³√x</td>
                  <td className="px-3 py-2">Square root or cube root.</td>
                  <td className="px-3 py-2 font-mono">√9 → 3</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-amber-200">1/x</td>
                  <td className="px-3 py-2">Reciprocal (useful for fractions).</td>
                  <td className="px-3 py-2 font-mono">1/8 → 0.125</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-amber-200">log, ln</td>
                  <td className="px-3 py-2">Base‑10 and natural logarithms.</td>
                  <td className="px-3 py-2 font-mono">log(100) = 2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono text-rose-200">π, e</td>
                  <td className="px-3 py-2">Mathematical constants.</td>
                  <td className="px-3 py-2 font-mono">π ≈ 3.14159</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5" aria-labelledby="sci-examples">
          <h3 id="sci-examples" className="text-lg font-semibold text-stone-100">
            Real‑world examples
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Find a triangle side
              </p>
              <p className="mt-1 text-[13px]">
                Given hypotenuse 10 and angle 30°,{" "}
                <span className="font-mono">10 × sin(30°) = 5</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Compound growth
              </p>
              <p className="mt-1 text-[13px]">
                Use powers to estimate growth: <span className="font-mono">1.05¹⁰ ≈ 1.629</span> (5% per
                year for 10 years).
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Logarithmic scale
              </p>
              <p className="mt-1 text-[13px]">
                Convert to a log scale: <span className="font-mono">log(1,000) = 3</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Pro tips</h3>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-300">
              <li>Check that DEG/RAD matches your question before using trig keys.</li>
              <li>Use memory keys to store intermediate values during longer problems.</li>
              <li>Use logs to turn multiplication into addition when working with very large numbers.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-stone-900/85 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Basic vs scientific
            </p>
            <p className="mt-2 text-sm text-stone-300">
              Reach for the basic calculator for day‑to‑day totals and the scientific calculator when
              you see angles, exponents, logs or roots in the question.
            </p>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Scientific calculator FAQ</h3>
            <dl className="mt-3 space-y-3 text-sm text-stone-300">
              <div>
                <dt className="font-semibold text-stone-100">Is this scientific calculator free?</dt>
                <dd className="mt-1 text-stone-300">Yes. No sign‑up, no account and no usage limits.</dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">
                  Does this calculator support both degrees and radians?
                </dt>
                <dd className="mt-1 text-stone-300">
                  Yes. Use the DEG/RAD key at the top to switch angle mode before using sin, cos or tan.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">
                  Is this calculator allowed in exams?
                </dt>
                <dd className="mt-1 text-stone-300">
                  Always check your exam rules. Many exams require specific physical calculators; this online
                  tool is best for practice and everyday work.
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-3 rounded-2xl bg-stone-900/90 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Accessibility &amp; privacy
            </p>
            <p className="text-sm text-stone-300">
              Keyboard input is supported, and calculations run only in your browser. We do not send your key
              presses or results to a server.
            </p>
          </div>
        </section>

        {/* Exam-style worked problems */}
        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5" aria-labelledby="worked-problems">
          <h3 id="worked-problems" className="text-lg font-semibold text-stone-100">
            Worked examples
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Triangle side (trig)
              </p>
              <p className="mt-1 text-[13px]">
                Find the opposite side when hypotenuse is 10 and angle is 30°:
              </p>
              <p className="mt-1 font-mono text-[12px] text-stone-200">
                10 × sin(30) = 5
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Exponent via logs
              </p>
              <p className="mt-1 text-[13px]">
                Solve 3ˣ = 81:
              </p>
              <p className="mt-1 font-mono text-[12px] text-stone-200">
                x = log(81) ÷ log(3) = 4
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Check DEG vs RAD
              </p>
              <p className="mt-1 text-[13px]">
                In DEG: <span className="font-mono">sin(90) = 1</span>. In RAD:{" "}
                <span className="font-mono">sin(π/2) = 1</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Angle mode tutorial */}
        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5" aria-labelledby="angle-modes">
          <h3 id="angle-modes" className="text-lg font-semibold text-stone-100">
            Degrees vs radians
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                Degrees (DEG)
              </p>
              <p className="mt-1 text-[13px]">
                A full circle is 360°. Common values:
              </p>
              <ul className="mt-1 list-inside list-disc text-[13px] text-stone-300">
                <li>90° = quarter turn</li>
                <li>180° = half turn</li>
                <li>360° = full turn</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-200">
                Radians (RAD)
              </p>
              <p className="mt-1 text-[13px]">
                Based on π. Useful in calculus and many formulas:
              </p>
              <ul className="mt-1 list-inside list-disc text-[13px] text-stone-300">
                <li>π rad = 180°</li>
                <li>π/2 rad = 90°</li>
                <li>2π rad = 360°</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common values cheat sheet */}
        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5" aria-labelledby="cheat-sheet">
          <h3 id="cheat-sheet" className="text-lg font-semibold text-stone-100">
            Quick reference: common values
          </h3>
          <div className="mt-3 grid gap-3 text-xs text-stone-300 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Trig values (degrees)
              </p>
              <table className="mt-2 w-full border-collapse text-[11px]">
                <thead className="text-stone-400">
                  <tr>
                    <th className="px-1 py-1 text-left">θ</th>
                    <th className="px-1 py-1 text-left">sin θ</th>
                    <th className="px-1 py-1 text-left">cos θ</th>
                  </tr>
                </thead>
                <tbody className="text-stone-300">
                  <tr>
                    <td className="px-1 py-1">0°</td>
                    <td className="px-1 py-1">0</td>
                    <td className="px-1 py-1">1</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1">30°</td>
                    <td className="px-1 py-1">0.5</td>
                    <td className="px-1 py-1">0.866…</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1">45°</td>
                    <td className="px-1 py-1">0.707…</td>
                    <td className="px-1 py-1">0.707…</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1">60°</td>
                    <td className="px-1 py-1">0.866…</td>
                    <td className="px-1 py-1">0.5</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1">90°</td>
                    <td className="px-1 py-1">1</td>
                    <td className="px-1 py-1">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl bg-stone-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Logs &amp; constants
              </p>
              <ul className="mt-2 space-y-1 text-[13px]">
                <li>
                  <span className="font-mono text-amber-200">log(10)</span> = 1,
                  <span className="font-mono text-amber-200"> log(100)</span> = 2
                </li>
                <li>
                  <span className="font-mono text-amber-200">ln(e)</span> = 1,
                  <span className="font-mono text-amber-200"> ln(1)</span> = 0
                </li>
                <li>
                  <span className="font-mono text-rose-200">π</span> ≈ 3.14159
                </li>
                <li>
                  <span className="font-mono text-rose-200">e</span> ≈ 2.71828
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5" aria-labelledby="related-tools">
          <h3 id="related-tools" className="text-lg font-semibold text-stone-100">
            Related calculators on Calculators.digital
          </h3>
          <p className="mt-2 text-sm text-stone-300">
            Use the scientific calculator when you&apos;re deep in maths or physics. For other
            tasks, these calculators may be a better fit:
          </p>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <a
              href="/basic"
              className="rounded-2xl border border-stone-800/80 bg-stone-900/80 p-3 text-left hover:border-amber-400/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Basic calculator
              </p>
              <p className="mt-1 text-[13px]">
                Quick everyday totals, percentages and bills.
              </p>
            </a>
            <a
              href="/graphing"
              className="rounded-2xl border border-stone-800/80 bg-stone-900/80 p-3 text-left hover:border-sky-400/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Graphing calculator
              </p>
              <p className="mt-1 text-[13px]">
                Plot functions and see how equations behave visually.
              </p>
            </a>
            <a
              href="/financial"
              className="rounded-2xl border border-stone-800/80 bg-stone-900/80 p-3 text-left hover:border-emerald-400/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Financial calculator
              </p>
              <p className="mt-1 text-[13px]">
                Time value of money, EMIs, savings and interest.
              </p>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

