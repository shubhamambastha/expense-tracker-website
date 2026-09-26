export default function Navbar() {
  return (
    <header className="border-b border-border/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-on-accent">
            ₹
          </span>
          Expense Tracker
        </a>

        <div className="hidden items-center gap-8 text-sm text-text-muted md:flex">
          <a href="#features" className="hover:text-text">Features</a>
          <a href="#showcase" className="hover:text-text">App</a>
          <a href="#security" className="hover:text-text">Security</a>
        </div>

        <a
          href="#download"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-accent transition hover:opacity-90"
        >
          Get the app
        </a>
      </nav>
    </header>
  )
}
