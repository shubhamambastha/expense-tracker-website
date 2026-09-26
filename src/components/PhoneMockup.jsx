const transactions = [
  { name: "Netflix", category: "Subscription", amount: "-₹649", color: "#E50914" },
  { name: "Salary", category: "Income", amount: "+₹85,000", color: "#00C896" },
  { name: "Swiggy", category: "Food", amount: "-₹412", color: "#FC8019" },
  { name: "Uber", category: "Transport", amount: "-₹230", color: "#0A84FF" },
]

export default function PhoneMockup({ className = "" }) {
  return (
    <div
      className={`relative w-[280px] rounded-[2.5rem] border-4 border-surface-2 bg-black p-3 shadow-2xl shadow-primary/10 ${className}`}
    >
      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-surface-2" />
      <div className="rounded-[1.75rem] bg-surface px-4 pb-5 pt-8">
        <p className="text-xs text-text-muted">Total Balance</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight">₹1,24,580</p>

        <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 p-3">
          <p className="text-[11px] text-text-muted">Safe to spend today</p>
          <p className="mt-1 text-xl font-semibold text-primary">₹1,840</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-medium text-text-muted">Recent</p>
          <p className="text-xs text-primary">See all</p>
        </div>

        <ul className="mt-2 space-y-2.5">
          {transactions.map((t) => (
            <li key={t.name} className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                style={{ backgroundColor: `${t.color}26`, color: t.color }}
              >
                {t.name[0]}
              </span>
              <span className="min-w-0 flex-1">
                <p className="truncate text-sm">{t.name}</p>
                <p className="text-[11px] text-text-muted">{t.category}</p>
              </span>
              <span
                className={`text-sm font-medium ${t.amount.startsWith("+") ? "text-primary" : "text-text"}`}
              >
                {t.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
