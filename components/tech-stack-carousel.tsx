"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TechStackCarouselProps {
  technologies: string[]
  className?: string
}

export function TechStackCarousel({ technologies, className }: TechStackCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  // Create a duplicated array for infinite scrolling effect
  const displayItems = [...technologies, ...technologies]

  // Calculate item width based on screen size
  const getItemWidth = () => {
    if (typeof window === "undefined") return 150
    if (window.innerWidth < 640) return 120
    if (window.innerWidth < 1024) return 150
    return 180
  }

  // Auto-scroll animation
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        // Reset when we've scrolled through all original items
        if (prev >= technologies.length * getItemWidth()) {
          return 0
        }
        return prev + 1
      })
    }, 30) // Smooth scrolling with small increments

    return () => clearInterval(scrollInterval)
  }, [technologies.length])

  return (
    <div className={cn("w-full bg-black py-8 overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />

          {/* Right fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-linear"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {displayItems.map((tech, index) => (
                <div key={`tech-${index}`} className="flex-shrink-0 px-4 py-2" style={{ width: `${getItemWidth()}px` }}>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600">
                        {tech.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-white whitespace-nowrap">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
