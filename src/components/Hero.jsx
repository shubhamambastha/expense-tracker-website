import PhoneMockup from "./PhoneMockup"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_28rem_at_75%_40%,rgb(0_200_150/0.18),transparent),radial-gradient(32rem_24rem_at_15%_10%,rgb(10_132_255/0.12),transparent)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-24 pt-16 md:flex-row md:justify-between md:pt-24">
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Know what you can safely spend, today
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
            Track every rupee.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stress about none.
            </span>
          </h1>

          <p className="mt-6 text-pretty text-lg text-text-muted md:text-xl">
            Jebbo logs your spending, income, subscriptions, and EMIs in one place —
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

        <PhoneMockup className="shrink-0 md:rotate-2" />
      </div>
    </section>
  )
}
