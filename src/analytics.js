// Google Analytics (GA4), loaded only after the visitor accepts the cookie
// banner. Until then nothing is requested from Google and no cookies are set;
// the queued commands below run once gtag.js arrives.
const GA_ID = "G-GLF8QGDMVW"
const CONSENT_KEY = "analytics-consent"

window.dataLayer = window.dataLayer || []
function gtag() {
  // gtag.js expects the Arguments object itself, not an array
  window.dataLayer.push(arguments)
}
gtag("js", new Date())
gtag("config", GA_ID)

// "granted", "denied", or null when the visitor hasn't chosen yet
export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Storage blocked: the choice still applies to this page view
  }
  if (value === "granted") load()
  else disable()
}

function load() {
  window[`ga-disable-${GA_ID}`] = false
  if (document.getElementById("gtag-js")) return
  const script = document.createElement("script")
  script.id = "gtag-js"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

// Stops an already-loaded gtag.js from sending more hits and removes the
// _ga cookies it set (GA puts them on the top-most domain it can).
function disable() {
  window[`ga-disable-${GA_ID}`] = true
  const expired = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
  const labels = location.hostname.split(".")
  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0]
    if (!name.startsWith("_ga")) continue
    document.cookie = name + expired
    for (let i = 0; i < labels.length; i++) {
      document.cookie = `${name}${expired}; domain=${labels.slice(i).join(".")}`
    }
  }
}

if (getConsent() === "granted") load()
