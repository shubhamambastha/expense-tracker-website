import { OPEN_COOKIE_SETTINGS } from "./CookieBanner"

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Jebbo. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="/#features" className="transition-colors hover:text-text">Features</a>
          <a href="/#security" className="transition-colors hover:text-text">Security</a>
          <a href="/#download" className="transition-colors hover:text-text">Download</a>
          <a href="/privacy" className="transition-colors hover:text-text">Privacy</a>
          <a href="/terms" className="transition-colors hover:text-text">Terms</a>
          <a href="/delete-account" className="transition-colors hover:text-text">Delete account</a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
            className="transition-colors hover:text-text"
          >
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  )
}
