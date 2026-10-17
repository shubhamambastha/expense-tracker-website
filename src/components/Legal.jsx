import { marked } from "marked"
import Navbar from "./Navbar"
import Footer from "./Footer"

// The .md files in src/legal are verbatim copies of the app repo's docs/ —
// re-copy them when those change. Here we only drop the internal
// "Before publishing" note and point the cross-link at the live page.
export default function Legal({ markdown }) {
  const title = markdown.match(/^# (.+)/m)[1]
  const html = marked.parse(
    markdown
      .replace(/^> \*\*Before publishing:\*\*.*\n+/m, "")
      .replaceAll("./PRIVACY_POLICY.md", "/privacy"),
  )

  return (
    <div className="min-h-screen bg-bg text-text">
      <title>{title}</title>
      <Navbar />
      <main className="legal mx-auto max-w-3xl px-6 py-12" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </div>
  )
}
