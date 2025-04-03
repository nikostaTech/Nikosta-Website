"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Throttle function to improve performance
    const throttle = (callback: Function, delay: number) => {
      let lastCall = 0
      return (...args: any[]) => {
        const now = new Date().getTime()
        if (now - lastCall < delay) {
          return
        }
        lastCall = now
        return callback(...args)
      }
    }

    const handleScroll = throttle(() => {
      if (!sectionRef.current || !contentRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Only apply parallax when section is in view
      if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        // Calculate how far through the section we've scrolled (0-1)
        const scrollProgress = 1 - (sectionRect.top + sectionRect.height) / (windowHeight + sectionRect.height)
        const yOffset = scrollProgress * speed * 100 // Adjust multiplier for effect strength

        // Apply transform with will-change for better performance
        contentRef.current.style.transform = `translateY(${yOffset}px)`
      }
    }, 20) // 20ms throttle

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div ref={contentRef} className="relative transition-transform duration-100 ease-out">
        {children}
      </div>
    </div>
  )
}

