export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-text">Features</a>
          <a href="#security" className="hover:text-text">Security</a>
          <a href="#download" className="hover:text-text">Download</a>
        </div>
      </div>
    </footer>
  )
}
