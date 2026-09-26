import googlePlayBadge from "../assets/badges/google-play-badge.svg"

export default function CTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/10 px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Start tracking in under a minute
        </h2>
        <p className="mx-auto mt-3 max-w-md text-text-muted">
          Free to use. No credit card, no bank linking — just you and where your money goes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* ponytail: placeholder pill — swap for Apple's official black SVG badge (needs a developer-account holder to accept Apple's Marketing Artwork License at developer.apple.com/app-store/marketing/guidelines/ before download) */}
          <a
            href="#"
            className="flex h-14 items-center gap-2 rounded-xl border border-border bg-black px-5 font-medium text-white transition hover:border-text-muted"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M16.365 1.43c0 1.14-.46 2.15-1.2 2.9-.79.83-2.08 1.47-3.13 1.38-.14-1.09.44-2.24 1.15-2.95.8-.82 2.19-1.44 3.18-1.33zM20.5 17.34c-.4.93-.88 1.83-1.55 2.68-.91 1.15-1.86 2.31-3.34 2.33-1.44.03-1.9-.85-3.55-.85-1.65 0-2.16.83-3.53.88-1.44.05-2.53-1.24-3.45-2.38-1.87-2.32-3.31-6.56-1.38-9.43.95-1.42 2.65-2.32 4.5-2.35 1.4-.03 2.72.94 3.58.94.85 0 2.46-1.16 4.15-.99.7.03 2.68.28 3.95 2.12-3.44 1.93-2.88 6.46.62 7.05z" />
            </svg>
            <span className="text-left leading-tight">
              <span className="block text-[10px] text-text-muted">Download on the</span>
              <span className="block text-lg">App Store</span>
            </span>
          </a>

          <a href="#" className="flex h-14 items-center">
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-full w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
