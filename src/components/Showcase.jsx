const warn = "#FF9F0A"

const categories = [
  { name: "Food & Dining", pct: 78 },
  { name: "Subscriptions", pct: 54 },
  { name: "Transport", pct: 32 },
  { name: "Shopping", pct: 91 },
]

function AnalyticsCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-black tabular-nums">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-text-muted">This month</p>
          <p className="mt-1 text-lg font-medium">Budget progress</p>
        </div>
        <span className="flex items-center gap-2 text-xs" style={{ color: warn }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: warn }} />
          1 near limit
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {categories.map((c) => {
          const near = c.pct >= 85
          return (
            <div key={c.name}>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">{c.name}</span>
                <span style={near ? { color: warn } : undefined}>
                  {c.pct}% <span className="text-text-muted">used</span>
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-surface-2">
                <div
                  className={`h-1.5 rounded-full ${near ? "" : "bg-text-muted/50"}`}
                  style={{ width: `${c.pct}%`, backgroundColor: near ? warn : undefined }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="text-xs text-text-muted">Savings rate</p>
        <p className="mt-1 flex items-baseline gap-3">
          <span className="text-2xl font-medium text-primary">32%</span>
          <span className="text-sm text-text-muted">+15% vs last month</span>
        </p>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section id="showcase" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-24 md:flex-row-reverse md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
            See where it actually goes
          </h2>
          <p className="mt-4 text-text-muted">
            Category breakdowns, month-over-month deltas, and a savings rate that's hidden
            entirely when it wouldn't mean anything. No misleading percentages, ever.
          </p>
          <ul className="mx-auto mt-6 w-fit space-y-3 text-left text-sm text-text-muted md:mx-0">
            <li className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-text-muted" />
              Week, month, quarter and custom date ranges
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-text-muted" />
              Automatic alerts for categories trending up
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-text-muted" />
              Multi-currency support, 10 currencies included
            </li>
          </ul>
        </div>

        <AnalyticsCard />
      </div>
    </section>
  )
}
