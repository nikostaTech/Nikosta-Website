"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Use refs to avoid stale closures in the timeout
  const indexRef = useRef(currentIndex)
  const isDeletingRef = useRef(isDeleting)
  const isPausedRef = useRef(isPaused)

  // Update refs when state changes
  useEffect(() => {
    indexRef.current = currentIndex
    isDeletingRef.current = isDeleting
    isPausedRef.current = isPaused
  }, [currentIndex, isDeleting, isPaused])

  useEffect(() => {
    if (!texts || texts.length === 0) return

    const currentText = texts[currentIndex]
    if (!currentText) return

    let timeoutId: NodeJS.Timeout

    const tick = () => {
      if (isPausedRef.current) {
        // If paused, wait and then continue
        timeoutId = setTimeout(() => {
          setIsPaused(false)
          tick()
        }, delayBetweenTexts)
        return
      }

      if (isDeletingRef.current) {
        // Deleting text
        setDisplayText((prev) => prev.substring(0, prev.length - 1))

        if (displayText.length <= 1) {
          setIsDeleting(false)
          // Move to next text
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        } else {
          timeoutId = setTimeout(tick, deletingSpeed)
        }
      } else {
        // Typing text
        const fullText = texts[indexRef.current]
        setDisplayText((prev) => fullText.substring(0, prev.length + 1))

        if (displayText.length >= fullText.length - 1) {
          // Finished typing, pause before deleting
          setIsPaused(true)
          timeoutId = setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
            tick()
          }, delayBetweenTexts)
        } else {
          timeoutId = setTimeout(tick, typingSpeed)
        }
      }
    }

    timeoutId = setTimeout(tick, typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [texts, currentIndex, isDeleting, isPaused, displayText, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-[1px]"></span>
    </span>
  )
}

