export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" aria-label="Jebbo home" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="" className="h-7 w-7" />
          <span className="text-lg font-semibold">jebbo</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-text-muted md:flex">
          <a href="/#features" className="transition-colors hover:text-text">Features</a>
          <a href="/#showcase" className="transition-colors hover:text-text">App</a>
          <a href="/#security" className="transition-colors hover:text-text">Security</a>
        </div>

        <a
          href="/#download"
          className="flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Get the app
        </a>
      </nav>
    </header>
  )
}
