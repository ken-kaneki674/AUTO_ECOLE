// Google Analytics 4 (gtag.js), adapté à la navigation SPA de vue-router.
// Désactivé en développement pour ne pas fausser les statistiques.
const GA_ID = import.meta.env.VITE_GA_ID || 'G-Z337DRFE8N'
const enabled = import.meta.env.PROD && typeof window !== 'undefined'

export function initAnalytics(router) {
  if (!enabled) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Les pages vues sont envoyées à chaque navigation du routeur (y compris la première).
  window.gtag('config', GA_ID, { send_page_view: false })

  router.afterEach((to, from, failure) => {
    if (failure) return
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title,
    })
  })
}

export function trackEvent(name, params = {}) {
  if (enabled && window.gtag) window.gtag('event', name, params)
}
