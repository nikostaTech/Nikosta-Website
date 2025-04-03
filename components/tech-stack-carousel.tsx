"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TechStackCarouselProps {
  technologies: string[]
  className?: string
}

export function TechStackCarousel({ technologies, className }: TechStackCarouselProps) {
  const [position, setPosition] = useState(0)
  const itemWidth = 150 // Width of each tech item in pixels

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Reset to beginning when we've scrolled through all items
        if (prev >= technologies.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [technologies.length])

  return (
    <div className={cn("relative overflow-hidden h-24", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      <div
        className="flex items-center transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${position * itemWidth}px)`,
        }}
      >
        {/* Duplicate the array to create an infinite loop effect */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech}-${index}`} className="flex-shrink-0 w-[150px] px-4 py-2 mx-4 text-center">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="h-10 w-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-primary-500 select-none">{tech.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium text-white whitespace-nowrap">{tech}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

