import { FeatureIcon } from "./Features"

const lock = "M6 11V8a6 6 0 0112 0v3M5 11h14v10H5V11zM12 15v2"
const user = "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0"
const shield = "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4"

const points = [
  {
    title: "Secure login, industry standard",
    icon: lock,
    body: "Sign-in is handled by Auth0 — the same authentication infrastructure trusted by banks and enterprise apps.",
  },
  {
    title: "Your data, isolated to you",
    icon: user,
    body: "Every record is scoped to your account at the database level, backed by Supabase with row-level security.",
  },
  {
    title: "No card linking needed",
    icon: shield,
    body: "You log transactions yourself — no bank credentials handed to a third party, no read access to your accounts.",
  },
]

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Security</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">Built to be trusted with money talk</h2>
        <p className="mt-3 text-text-muted">Privacy isn't a feature we bolted on — it's the foundation.</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/40">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/15 text-primary">
              <FeatureIcon path={p.icon} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
