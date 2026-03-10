export function CalculatorHistoryContent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050509] via-[#02010a] to-[#020203] px-4 py-12 text-stone-200">
      {/* Motion background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-orb absolute -left-24 top-0 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="floating-orb absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="floating-orb absolute bottom-[-5rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-10">
        <header className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-200 ring-1 ring-stone-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            The story behind this simple calculator
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            From ancient abacus to the calculator in your browser
          </h2>
          <p className="max-w-2xl text-sm text-stone-400">
            Every tap on this keypad stands on thousands of years of ideas about how to handle
            numbers faster, with fewer mistakes and less effort.
          </p>
        </header>

        <section
          aria-labelledby="what-is-calculator"
          className="grid gap-6 rounded-3xl border border-stone-800/80 bg-stone-950/60 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]"
        >
          <div>
            <h3 id="what-is-calculator" className="text-lg font-semibold text-stone-100">
              What is a calculator?
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              A calculator is any device—mechanical, electronic or purely digital—built to carry out
              maths faster and more accurately than we can in our heads. It takes numbers in, runs
              them through fixed mathematical rules and shows the result on a screen or dial.
            </p>
            <p className="mt-2 text-sm text-stone-300">
              Almost every calculator handles the basics: add, subtract, multiply and divide. More
              advanced models build on the same idea to support algebra, statistics, graphing or
              finance.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 rounded-2xl bg-stone-900/70 p-4 text-xs text-stone-200">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Inside a modern calculator
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="text-[11px] font-semibold text-amber-200">Power</p>
                <p className="mt-1 text-[11px] text-stone-400">Battery, solar cell or both.</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="text-[11px] font-semibold text-sky-200">Display</p>
                <p className="mt-1 text-[11px] text-stone-400">LED or LCD, usually 8–12 digits.</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="text-[11px] font-semibold text-emerald-200">Brain</p>
                <p className="mt-1 text-[11px] text-stone-400">A tiny integrated circuit chip.</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="text-[11px] font-semibold text-violet-200">Keypad</p>
                <p className="mt-1 text-[11px] text-stone-400">Digits, operations and function keys.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="why-invented"
          className="grid gap-5 rounded-3xl border border-stone-800/70 bg-stone-950/50 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div>
            <h3 id="why-invented" className="text-lg font-semibold text-stone-100">
              Why were calculators invented?
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              Long before screens and chips, people in trade, astronomy, navigation and engineering
              were drowning in numbers. Manual arithmetic was slow, tiring and error‑prone—and a
              single mistake could sink a ship, ruin an account book or derail a project.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl bg-stone-900/70 p-4 text-sm text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Pascal&apos;s motivation
            </p>
            <p className="text-sm text-stone-300">
              In 1642, 18‑year‑old Blaise Pascal watched his father grind through tax calculations
              by hand and decided there had to be a better way. His solution, the Pascaline,
              replaced pages of pen‑and‑ink arithmetic with a box of gears and dials that could add
              and subtract automatically.
            </p>
          </div>
        </section>

        <section aria-labelledby="who-invented">
          <h3 id="who-invented" className="text-lg font-semibold text-stone-100">
            Who invented the calculator? Key milestones
          </h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-800 bg-stone-950/70 text-xs">
            <table className="min-w-full border-collapse">
              <thead className="bg-stone-900/80 text-stone-200">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Inventor</th>
                  <th className="px-3 py-2 text-left font-semibold">Year</th>
                  <th className="px-3 py-2 text-left font-semibold">Contribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                <tr>
                  <td className="px-3 py-2">Blaise Pascal</td>
                  <td className="px-3 py-2">1642</td>
                  <td className="px-3 py-2">Built the Pascaline, a mechanical calculator for addition and subtraction.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Gottfried Wilhelm Leibniz</td>
                  <td className="px-3 py-2">1694</td>
                  <td className="px-3 py-2">Extended Pascal&apos;s work with a machine that could multiply and divide.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Charles Babbage</td>
                  <td className="px-3 py-2">1820s–1830s</td>
                  <td className="px-3 py-2">Designed programmable calculating engines, early blueprints for computers.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Willgodt T. Odhner</td>
                  <td className="px-3 py-2">1874</td>
                  <td className="px-3 py-2">Invented the pin-wheel calculator, the dominant mechanical design.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Intel &amp; Busicom</td>
                  <td className="px-3 py-2">1971</td>
                  <td className="px-3 py-2">Created the first microprocessor for electronic pocket calculators.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Hewlett-Packard</td>
                  <td className="px-3 py-2">1972</td>
                  <td className="px-3 py-2">Released the HP‑35, the first handheld scientific calculator.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="timeline">
          <h3 id="timeline" className="text-lg font-semibold text-stone-100">
            A quick timeline of calculator history
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Ancient &amp; classical
              </p>
              <p className="mt-1 text-[13px] text-stone-300">
                Abacus boards and devices like the Antikythera mechanism helped people add, subtract
                and track the heavens thousands of years before electronics.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Mechanical era
              </p>
              <p className="mt-1 text-[13px] text-stone-300">
                From Pascal and Leibniz to the Arithmometer and Comptometers, clocks of gears took
                over office arithmetic through the 19th and early 20th centuries.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Electronic &amp; digital
              </p>
              <p className="mt-1 text-[13px] text-stone-300">
                Microprocessors, pocket scientific calculators and now online calculators like this
                one put serious computing power in your hand.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="types">
          <h3 id="types" className="text-lg font-semibold text-stone-100">
            Types of calculators
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-3">
              <h4 className="text-sm font-semibold text-stone-50">Mechanical calculators</h4>
              <p className="mt-1 text-[13px] text-stone-400">
                From the Pascaline and Leibniz wheel to the Arithmometer, Comptometer and pin‑wheel
                designs, these gear‑driven machines ruled offices until the 1970s.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-3">
              <h4 className="text-sm font-semibold text-stone-50">Electronic calculators</h4>
              <p className="mt-1 text-[13px] text-stone-400">
                Integrated circuits, LED/LCD displays and solar panels turned calculators into
                cheap, powerful pocket devices.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-3">
              <h4 className="text-sm font-semibold text-stone-50">Scientific &amp; graphing</h4>
              <p className="mt-1 text-[13px] text-stone-400">
                Handle trigonometry, logarithms, statistics and graphing functions, becoming staples
                in maths and engineering education.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-3">
              <h4 className="text-sm font-semibold text-stone-50">Financial &amp; printing</h4>
              <p className="mt-1 text-[13px] text-stone-400">
                Built for money: time value of money, amortisation, investments and paper tapes for
                audit trails.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="impact"
          className="grid gap-5 rounded-3xl border border-stone-800/80 bg-stone-950/60 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div>
            <h3 id="impact" className="text-lg font-semibold text-stone-100">
              How calculators changed everyday life
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              Calculators reshaped education, business and engineering. In classrooms, they moved
              the focus from long arithmetic to problem‑solving. In offices, they sped up
              bookkeeping, billing and tax work. For scientists and engineers, they dramatically
              reduced the time needed for complex calculations.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              When you tap this calculator…
            </p>
            <p className="mt-2 text-sm text-stone-300">
              …you&apos;re using ideas that started with abacus beads, passed through gears and
              vacuum tubes and now run as tiny instructions on a web page. The goal never changed:
              make working with numbers feel lighter so you can focus on the decision, not the
              arithmetic.
            </p>
          </div>
        </section>

        {/* Practical examples */}
        <section aria-labelledby="examples" className="rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5">
          <h3 id="examples" className="text-lg font-semibold text-stone-100">
            Real‑life examples with this basic calculator
          </h3>
          <p className="mt-2 text-sm text-stone-300">
            Here are a few quick ways people use a four‑function calculator like this one every day.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Shopping total
              </p>
              <p className="mt-1 text-[13px]">
                Add up items in your cart: <span className="font-mono">15.99 + 29.50 + 3.25 = 48.74</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Apply a discount
              </p>
              <p className="mt-1 text-[13px]">
                Take 20% off a price: <span className="font-mono">80 − 20%</span> &rarr;{" "}
                <span className="font-mono">64</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Split a bill
              </p>
              <p className="mt-1 text-[13px]">
                Share a dinner between three people: <span className="font-mono">120 ÷ 3 = 40</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Pro tips / shortcuts */}
        <section
          aria-labelledby="pro-tips"
          className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div>
            <h3 id="pro-tips" className="text-lg font-semibold text-stone-100">
              Pro tips for faster calculations
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              On desktop, this calculator is built to work as fast with your keyboard as with your
              mouse.
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-300">
              <li>Use <span className="font-mono">Enter</span> or <span className="font-mono">=</span> for equals.</li>
              <li>
                Use <span className="font-mono">Backspace</span> to delete the last digit and{" "}
                <span className="font-mono">Del</span> to clear the current entry.
              </li>
              <li>
                Press <span className="font-mono">Esc</span> to reset everything (AC) in one key.
              </li>
              <li>
                Use <span className="font-mono">%</span> for percentage operations instead of doing
                the maths manually.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Quick shortcut map
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="font-mono text-[11px] text-amber-200">+ − * /</p>
                <p className="mt-1 text-[11px] text-stone-400">Arithmetic operators</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="font-mono text-[11px] text-emerald-200">Enter</p>
                <p className="mt-1 text-[11px] text-stone-400">Equals</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="font-mono text-[11px] text-sky-200">Backspace</p>
                <p className="mt-1 text-[11px] text-stone-400">Delete last digit</p>
              </div>
              <div className="rounded-xl bg-black/40 px-3 py-2">
                <p className="font-mono text-[11px] text-rose-200">Esc</p>
                <p className="mt-1 text-[11px] text-stone-400">All clear (AC)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Basic arithmetic refresher */}
        <section aria-labelledby="refresher" className="rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5">
          <h3 id="refresher" className="text-lg font-semibold text-stone-100">
            Quick arithmetic refresher
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Addition &amp; subtraction
              </p>
              <p className="mt-1 text-[13px]">
                Combine or remove amounts: <span className="font-mono">35 + 12 = 47</span>,{" "}
                <span className="font-mono">47 − 5 = 42</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Multiplication &amp; division
              </p>
              <p className="mt-1 text-[13px]">
                Repeated addition or sharing: <span className="font-mono">6 × 4 = 24</span>,{" "}
                <span className="font-mono">24 ÷ 3 = 8</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Percent
              </p>
              <p className="mt-1 text-[13px]">
                Find a percentage of a value: <span className="font-mono">200 × 10% = 20</span>, or
                add it with <span className="font-mono">200 + 10%</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Change over time
              </p>
              <p className="mt-1 text-[13px]">
                Calculate a simple percentage change:{" "}
                <span className="font-mono">(120 − 100) ÷ 100 × 100 = 20%</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison & related tools */}
        <section
          aria-labelledby="compare"
          className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div>
            <h3 id="compare" className="text-lg font-semibold text-stone-100">
              Basic vs other calculator types
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              This page focuses on a classic four‑function calculator. Other calculators add layers
              of power on top of the same idea.
            </p>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-800/80 bg-stone-950/80 text-xs">
              <table className="min-w-full border-collapse">
                <thead className="bg-stone-900/80 text-stone-200">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Type</th>
                    <th className="px-3 py-2 text-left font-semibold">Best for</th>
                    <th className="px-3 py-2 text-left font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 text-stone-300">
                  <tr>
                    <td className="px-3 py-2">Basic</td>
                    <td className="px-3 py-2">Everyday totals and quick checks.</td>
                    <td className="px-3 py-2">Shopping, bills, tips.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Scientific</td>
                    <td className="px-3 py-2">Maths and science coursework.</td>
                    <td className="px-3 py-2">Trig, logs, powers, roots.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Graphing</td>
                    <td className="px-3 py-2">Visualising functions and data.</td>
                    <td className="px-3 py-2">Plot y = f(x), explore curves.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Financial</td>
                    <td className="px-3 py-2">Money and planning.</td>
                    <td className="px-3 py-2">Loans, EMIs, interest, savings.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-2 rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Coming soon on Calculators.digital
            </p>
            <ul className="mt-1 space-y-1 text-sm">
              <li>
                <span className="font-semibold text-sky-200">Scientific calculator</span> – for
                algebra, trig and exponents.
              </li>
              <li>
                <span className="font-semibold text-emerald-200">Loan / EMI calculator</span> – for
                monthly payments and interest.
              </li>
              <li>
                <span className="font-semibold text-rose-200">BMI &amp; health tools</span> – for
                quick health‑related numbers.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ & accessibility / privacy */}
        <section
          aria-labelledby="faq"
          className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div>
            <h3 id="faq" className="text-lg font-semibold text-stone-100">
              Basic calculator FAQ
            </h3>
            <dl className="mt-3 space-y-3 text-sm text-stone-300">
              <div>
                <dt className="font-semibold text-stone-100">Is this calculator free to use?</dt>
                <dd className="mt-1 text-stone-300">Yes—there&apos;s no sign‑up, login or usage limit.</dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">Does it save my history?</dt>
                <dd className="mt-1 text-stone-300">
                  Your history tape and memory are stored in your browser only. Clearing browser
                  data will remove them.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">
                  Can I use this calculator in exams?
                </dt>
                <dd className="mt-1 text-stone-300">
                  That depends on your exam rules. Many exams require specific approved devices, so
                  always check the guidance first.
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-3 rounded-2xl bg-stone-900/90 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Accessibility &amp; privacy
            </p>
            <p className="text-sm text-stone-300">
              This calculator supports keyboard input and announces results to screen readers on
              equals. It does not send your button presses or history to a server—everything
              happens in your browser.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

