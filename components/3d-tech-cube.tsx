"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TechCubeProps {
  className?: string
}

export function TechCube({ className }: TechCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rotateX = 0
    let rotateY = 0
    let requestId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate rotation based on mouse position relative to center
      rotateY = ((e.clientX - centerX) / rect.width) * 20
      rotateX = ((e.clientY - centerY) / rect.height) * 20

      updateCube()
    }

    const updateCube = () => {
      if (!container) return

      const cube = container.querySelector(".cube") as HTMLElement
      if (cube) {
        cube.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
        cube.style.transition = "transform 0.1s ease-out"
      }
    }

    const autoRotate = () => {
      if (!container.matches(":hover")) {
        rotateY += 0.1
        if (rotateY > 360) rotateY = 0
        updateCube()
      }
      requestId = requestAnimationFrame(autoRotate)
    }

    container.addEventListener("mousemove", handleMouseMove)
    requestId = requestAnimationFrame(autoRotate)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(requestId)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("perspective-[800px] w-full h-full", className)}>
      <div className="cube relative w-full h-full transform-style-3d transition-transform duration-200 ease-out">
        {/* Front */}
        <div className="absolute inset-0 transform translate-z-[100px] bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">Software</span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 transform translate-z-[-100px] rotate-y-180 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">Cloud</span>
        </div>

        {/* Left */}
        <div className="absolute inset-0 transform translate-x-[-100px] rotate-y-[-90deg] bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">Data</span>
        </div>

        {/* Right */}
        <div className="absolute inset-0 transform translate-x-[100px] rotate-y-90 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">Security</span>
        </div>

        {/* Top */}
        <div className="absolute inset-0 transform translate-y-[-100px] rotate-x-90 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">AI</span>
        </div>

        {/* Bottom */}
        <div className="absolute inset-0 transform translate-y-[100px] rotate-x-[-90deg] bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold select-none">IoT</span>
        </div>
      </div>
    </div>
  )
}

