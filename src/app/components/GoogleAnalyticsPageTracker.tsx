import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

declare global {
  interface Window {
    gtag: (...args: [string, ...unknown[]]) => void
  }
}

export function GoogleAnalyticsPageTracker() {
  const location = useLocation()
  const lastTrackedPage = useRef<string | null>(null)
  const pagePath = `${location.pathname}${location.search}${location.hash}`

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (lastTrackedPage.current === pagePath) return

      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      })
      lastTrackedPage.current = pagePath
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [pagePath])

  return null
}
