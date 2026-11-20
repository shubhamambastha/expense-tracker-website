import PhoneMockup from "./PhoneMockup"

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-16 pt-16 md:flex-row md:justify-between md:py-24">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
          Track every rupee
          <br />
          <span className="text-text-muted">Stress about none</span>
        </h1>

        <p className="mt-6 text-pretty text-lg text-text-muted md:text-xl">
          Jebbo logs your spending, income, subscriptions and EMIs in one place, then tells
          you exactly how much is safe to spend today.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
          <a
            href="#download"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 font-medium text-on-accent transition-opacity hover:opacity-90 sm:w-auto"
          >
            Download free
          </a>
          <a
            href="#features"
            className="flex h-12 w-full items-center justify-center rounded-xl border border-border bg-surface px-6 font-medium transition-colors hover:border-text-muted sm:w-auto"
          >
            See how it works
          </a>
        </div>
      </div>

      <PhoneMockup className="shrink-0" />
    </section>
  )
}
