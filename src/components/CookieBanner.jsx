import { useEffect, useState } from "react"
import { getConsent, setConsent } from "../analytics"

// Asks before loading Google Analytics. Shown until the visitor chooses, and
// again whenever the footer's "Cookie settings" button fires this event.
export const OPEN_COOKIE_SETTINGS = "open-cookie-settings"

export default function CookieBanner() {
  const [open, setOpen] = useState(() => getConsent() === null)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS, show)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, show)
  }, [])

  if (!open) return null

  const choose = (value) => {
    setConsent(value)
    setOpen(false)
  }

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-black/60"
    >
      <p className="text-sm leading-relaxed text-text-muted">
        We'd like to use Google Analytics cookies to count visits and see which pages are
        useful. Nothing is used for ads, and the app itself has no tracking.{" "}
        <a href="/privacy" className="text-primary underline underline-offset-2">
          Privacy Policy
        </a>
      </p>
      <div className="mt-4 flex gap-3 sm:justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 rounded-full border border-border px-5 py-2 text-sm font-medium text-text transition hover:border-text-muted sm:flex-none"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="flex-1 rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-accent transition hover:opacity-90 sm:flex-none"
        >
          Accept
        </button>
      </div>
    </section>
  )
}
