export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Jebbo. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="/#features" className="hover:text-text">Features</a>
          <a href="/#security" className="hover:text-text">Security</a>
          <a href="/#download" className="hover:text-text">Download</a>
          <a href="/privacy" className="hover:text-text">Privacy</a>
          <a href="/terms" className="hover:text-text">Terms</a>
        </div>
      </div>
    </footer>
  )
}
