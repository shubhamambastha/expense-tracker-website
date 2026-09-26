import PhoneMockup from "./PhoneMockup"

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-20 pt-16 md:flex-row md:pt-24">
      <div className="max-w-xl text-center md:text-left">
        <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-muted">
          Know what you can safely spend, today
        </span>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Track every rupee.
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Stress about none.
          </span>
        </h1>

        <p className="mt-5 text-lg text-text-muted">
          Expense Tracker logs your spending, income, subscriptions, and EMIs in one place —
          then tells you exactly how much is safe to spend today.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
          <a
            href="#download"
            className="w-full rounded-full bg-primary px-6 py-3 text-center font-medium text-on-accent transition hover:opacity-90 sm:w-auto"
          >
            Download free
          </a>
          <a
            href="#features"
            className="w-full rounded-full border border-border px-6 py-3 text-center font-medium transition hover:border-text-muted sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <p className="mt-4 text-sm text-text-muted">
          No spreadsheets. No card linking required. Your data, your accounts.
        </p>
      </div>

      <PhoneMockup className="shrink-0" />
    </section>
  )
}
