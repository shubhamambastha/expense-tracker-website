const categories = [
  { name: "Food & Dining", pct: 78, color: "#00C896" },
  { name: "Subscriptions", pct: 54, color: "#0A84FF" },
  { name: "Transport", pct: 32, color: "#FF9F0A" },
  { name: "Shopping", pct: 91, color: "#FF453A" },
]

function AnalyticsCard() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-primary/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-text-muted">This month</p>
          <p className="text-lg font-semibold">Budget progress</p>
        </div>
        <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">On track</span>
      </div>

      <div className="mt-6 space-y-4">
        {categories.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">{c.name}</span>
              <span>{c.pct}%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-surface-2">
              <div
                className="h-2 rounded-full"
                style={{ width: `${c.pct}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
        <div>
          <p className="text-xs text-text-muted">Savings rate</p>
          <p className="text-xl font-semibold text-primary">32%</p>
        </div>
        <div>
          <p className="text-xs text-text-muted">vs. last month</p>
          <p className="text-xl font-semibold text-secondary">+15%</p>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section id="showcase" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-20 md:flex-row-reverse">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            See where it actually goes
          </h2>
          <p className="mt-4 text-text-muted">
            Category breakdowns, month-over-month deltas, and a savings rate that's hidden
            entirely when it wouldn't mean anything — no misleading percentages, ever.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Week, month, quarter, and custom date ranges
            </li>
            <li className="flex items-center gap-2 text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Automatic alerts for categories trending up
            </li>
            <li className="flex items-center gap-2 text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Multi-currency support, 10 currencies included
            </li>
          </ul>
        </div>

        <AnalyticsCard />
      </div>
    </section>
  )
}
