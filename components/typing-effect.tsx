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

  // Refs to avoid stale closure issues in timer callbacks
  const indexRef = useRef(currentIndex)
  const isDeletingRef = useRef(isDeleting)
  const isPausedRef = useRef(isPaused)
  const displayRef = useRef(displayText)

  // Update refs whenever state changes
  useEffect(() => {
    indexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    isDeletingRef.current = isDeleting
  }, [isDeleting])

  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  useEffect(() => {
    displayRef.current = displayText
  }, [displayText])

  useEffect(() => {
    if (!texts || texts.length === 0) return

    let timeoutId: NodeJS.Timeout

    const tick = () => {
      if (isPausedRef.current) {
        // When paused, wait a bit and continue
        timeoutId = setTimeout(() => {
          setIsPaused(false)
          tick()
        }, delayBetweenTexts)
        return
      }

      const fullText = texts[indexRef.current]

      if (isDeletingRef.current) {
        // Compute the new text by removing one character
        const newText = fullText.substring(0, displayRef.current.length - 1)
        setDisplayText(newText)
        // If no text remains, move to the next text
        if (newText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          timeoutId = setTimeout(tick, typingSpeed)
        } else {
          timeoutId = setTimeout(tick, deletingSpeed)
        }
      } else {
        // Compute the new text by adding one character
        const newText = fullText.substring(0, displayRef.current.length + 1)
        setDisplayText(newText)
        // If full text is typed, pause before starting deletion
        if (newText === fullText) {
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
  }, [texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-[1px]"></span>
    </span>
  )
}
