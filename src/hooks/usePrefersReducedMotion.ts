import { useEffect, useState } from 'react'

const query = '(prefers-reduced-motion: reduce)'

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

