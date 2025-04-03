"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const start = 0
      const end = value
      const range = end - start
      const startTime = performance.now()

      // Pre-calculate the final width to prevent layout shifts
      const finalWidth = String(end).length

      // Update the counter with a fixed width
      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const easedProgress = easeOutQuart(progress)
        const currentCount = Math.floor(start + range * easedProgress)

        if (countRef.current !== currentCount) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [inView, value, duration])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  // Update the return statement to use a fixed width container
  return (
    <span ref={ref} className={cn("inline-block", className)} style={{ minWidth: `${String(value).length}ch` }}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

