const points = [
  {
    title: "Secure login, industry standard",
    body: "Sign-in is handled by Auth0 — the same authentication infrastructure trusted by banks and enterprise apps.",
  },
  {
    title: "Your data, isolated to you",
    body: "Every record is scoped to your account at the database level, backed by Supabase with row-level security.",
  },
  {
    title: "No card linking needed",
    body: "You log transactions yourself — no bank credentials handed to a third party, no read access to your accounts.",
  },
]

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built to be trusted with money talk</h2>
        <p className="mt-3 text-text-muted">Privacy isn't a feature we bolted on — it's the foundation.</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border p-6">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
