const icon = {
  list: "M4 6h16M4 12h16M4 18h10",
  repeat: "M17 2l4 4-4 4M3 11V9a4 4 0 014-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 01-4 4H3",
  card: "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM3 10h18",
  target: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 16a4 4 0 100-8 4 4 0 000 8z",
  gauge: "M12 20a8 8 0 100-16 8 8 0 000 16zM12 12l4-4M12 4v2M4 12h2M20 12h-2",
  chart: "M4 20V10M12 20V4M20 20v-7",
}

const features = [
  {
    title: "One log for everything",
    body: "Expenses, income and transfers in a single list. Search, filter and sort by date, category or amount.",
    icon: icon.list,
  },
  {
    title: "Subscriptions and EMIs, tracked",
    body: "Recurring charges are logged automatically with an upcoming-payments timeline, so nothing renews as a surprise.",
    icon: icon.repeat,
  },
  {
    title: "Every account, one view",
    body: "Bank, wallet and credit card balances stay current automatically, with credit utilization and due-date reminders built in.",
    icon: icon.card,
  },
  {
    title: "Budgets that hold the line",
    body: "Set a monthly limit per category and get warned as you approach it. No rollover games, just a clear number.",
    icon: icon.target,
  },
  {
    title: "Safe to spend today",
    body: "One number: this month's income minus what you've already spent, so you always know what's actually free to use.",
    icon: icon.gauge,
  },
  {
    title: "Insights from your own history",
    body: "Spending spikes, weekend overspending and savings rate, surfaced automatically from your transactions.",
    icon: icon.chart,
  },
]

export function FeatureIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d={path} />
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
          Everything your spreadsheet was trying to do
        </h2>
        <p className="mt-3 text-text-muted">
          Built around how money actually moves, not just a list of numbers
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="border-t border-border pt-6">
            <span className="text-text-muted">
              <FeatureIcon path={f.icon} />
            </span>
            <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
