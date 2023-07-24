import { LegacyRef, useEffect, useRef, useState } from 'react'
import { Focus } from './useFocus.types'

const useFocus: Focus = () => {
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef: LegacyRef<HTMLElement> = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleFocus = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
        setIsFocused(false)
      } else setIsFocused(true)
    }
    document.addEventListener('click', handleFocus)

    return () => {
      document.removeEventListener('click', handleFocus)
    }
  }, [])

  const focus = () => {
    setIsFocused(true)
  }

  const unfocus = () => {
    setIsFocused(false)
  }

  return [isFocused, wrapperRef, focus, unfocus]
}

export default useFocus
