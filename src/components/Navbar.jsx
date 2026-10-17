export default function Navbar() {
  return (
    <header className="border-b border-border/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" aria-label="Jebbo home" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="" className="h-8 w-8" />
          <span className="bg-gradient-to-r from-primary via-secondary to-[#9b45e4] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
            jebbo
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-text-muted md:flex">
          <a href="/#features" className="hover:text-text">Features</a>
          <a href="/#showcase" className="hover:text-text">App</a>
          <a href="/#security" className="hover:text-text">Security</a>
        </div>

        <a
          href="/#download"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-accent transition hover:opacity-90"
        >
          Get the app
        </a>
      </nav>
    </header>
  )
}
