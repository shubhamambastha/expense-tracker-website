import googlePlayBadge from "../assets/badges/google-play-badge.svg"

// Paste the live listing URLs here. Empty = badge renders as "Coming soon" instead of a dead link.
const storeLinks = {
  apple: "",
  google: "",
}

function StoreLink({ href, children }) {
  if (href) return <a href={href} className="flex h-14 items-center">{children}</a>
  return (
    <span aria-disabled="true" className="relative flex h-14 cursor-not-allowed items-center opacity-50">
      {children}
      <span className="absolute -top-2.5 right-2 rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-medium text-text">
        Coming soon
      </span>
    </span>
  )
}

export default function CTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 via-surface to-secondary/20 px-8 py-16 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Start tracking in under a minute
        </h2>
        <p className="mx-auto mt-3 max-w-md text-balance text-text-muted">
          Free to use. No credit card, no bank linking — just you and where your money goes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* ponytail: placeholder pill — swap for Apple's official black SVG badge (needs a developer-account holder to accept Apple's Marketing Artwork License at developer.apple.com/app-store/marketing/guidelines/ before download) */}
          <StoreLink href={storeLinks.apple}>
            <span className="flex h-full items-center gap-2 rounded-xl border border-border bg-black px-5 font-medium text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M16.365 1.43c0 1.14-.46 2.15-1.2 2.9-.79.83-2.08 1.47-3.13 1.38-.14-1.09.44-2.24 1.15-2.95.8-.82 2.19-1.44 3.18-1.33zM20.5 17.34c-.4.93-.88 1.83-1.55 2.68-.91 1.15-1.86 2.31-3.34 2.33-1.44.03-1.9-.85-3.55-.85-1.65 0-2.16.83-3.53.88-1.44.05-2.53-1.24-3.45-2.38-1.87-2.32-3.31-6.56-1.38-9.43.95-1.42 2.65-2.32 4.5-2.35 1.4-.03 2.72.94 3.58.94.85 0 2.46-1.16 4.15-.99.7.03 2.68.28 3.95 2.12-3.44 1.93-2.88 6.46.62 7.05z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-text-muted">Download on the</span>
                <span className="block text-lg">App Store</span>
              </span>
            </span>
          </StoreLink>

          <StoreLink href={storeLinks.google}>
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-full w-auto" />
          </StoreLink>
        </div>
      </div>
    </section>
  )
}
