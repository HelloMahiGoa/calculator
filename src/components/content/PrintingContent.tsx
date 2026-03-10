export function PrintingContent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050509] via-[#02010a] to-[#020203] px-4 py-12 text-stone-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-orb absolute -left-24 top-[-4rem] h-64 w-64 rounded-full bg-amber-500/25 blur-3xl" />
        <div className="floating-orb absolute right-[-4rem] top-32 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl space-y-10">
        <header className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-100 ring-1 ring-stone-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Printing calculator &amp; tape
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What is a printing calculator?
          </h2>
          <p className="max-w-2xl text-sm text-stone-400">
            A printing calculator keeps a running “tape” of every line you enter, so you can check,
            share or file a record of all your totals—just like a desktop adding machine with paper,
            but digital.
          </p>
        </header>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/60 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Who uses printing calculators?</h3>
            <p className="mt-2 text-sm text-stone-300">
              Printing calculators are favourites in bookkeeping, retail and anywhere people want a
              clear audit trail of their calculations.
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-300">
              <li>Shop owners adding up receipts and daily totals.</li>
              <li>Accountants reconciling bank statements or ledgers.</li>
              <li>People checking invoices, discounts and taxes line by line.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Why use a tape instead of just a total?
            </p>
            <p className="mt-2 text-sm text-stone-300">
              A running tape lets you see exactly how you reached a total. If something feels off,
              you can scan the lines and spot the mistake rather than starting over from scratch.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5" aria-labelledby="printing-examples">
          <h3 id="printing-examples" className="text-lg font-semibold text-stone-100">
            Real‑life examples with the printing calculator
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Daily cash‑up
              </p>
              <p className="mt-1 text-[13px]">
                Add each receipt or till reading as its own line. At the end of the day, copy the
                tape into your bookkeeping software.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Invoice check
              </p>
              <p className="mt-1 text-[13px]">
                Rebuild a supplier invoice line by line to confirm their grand total—your tape shows
                exactly what you checked.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-900/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                Expense report
              </p>
              <p className="mt-1 text-[13px]">
                Enter each expense and keep the tape as a record attached to your claim.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/70 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">How to use this printing calculator</h3>
            <ol className="mt-2 list-inside list-decimal text-sm text-stone-300">
              <li>Type the first amount and press +, −, × or ÷ to add a new operation.</li>
              <li>Enter the next amount and press the operator or = to write a line to the tape.</li>
              <li>Repeat for each new line; the subtotal updates on the right side of the tape.</li>
              <li>Click any line to reuse its subtotal as the starting point for more work.</li>
              <li>Use “Copy tape” or “Share tape” to move the full record into email or notes.</li>
            </ol>
          </div>
          <div className="rounded-2xl bg-stone-900/80 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Pro tips
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Use C to clear just the current entry; AC to clear tape and display.</li>
              <li>Use % after an amount to apply percentage changes relative to the previous subtotal.</li>
              <li>Keyboard shortcuts like digits, +, −, ×, ÷, Enter, Backspace and Esc all work here too.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-stone-800/80 bg-stone-950/80 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h3 className="text-lg font-semibold text-stone-100">Printing calculator FAQ</h3>
            <dl className="mt-3 space-y-3 text-sm text-stone-300">
              <div>
                <dt className="font-semibold text-stone-100">Is this printing calculator free?</dt>
                <dd className="mt-1 text-stone-300">Yes. It&apos;s free to use with no sign‑up.</dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">Where is the tape stored?</dt>
                <dd className="mt-1 text-stone-300">
                  The tape lives only in your current browser tab. If you reload or close the page, the tape
                  will reset—use Copy/Share if you need a permanent record.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-100">
                  Can I use this instead of a paper printing calculator?
                </dt>
                <dd className="mt-1 text-stone-300">
                  For many bookkeeping tasks, yes. If you&apos;re required to keep physical paper rolls for
                  compliance, treat this as a helper rather than a replacement.
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-3 rounded-2xl bg-stone-900/90 p-4 text-xs text-stone-300">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
              Accessibility &amp; privacy
            </p>
            <p className="text-sm text-stone-300">
              Keyboard input is supported and your tape stays in this browser only. We do not log or send
              your tape to any server—copy it yourself when you need to share it.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

