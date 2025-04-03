"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, type CardProps } from "@/components/ui/card"

interface AnimatedCardProps extends CardProps {
  children: React.ReactNode
  glowOnHover?: boolean
  tiltEffect?: boolean
  glowColor?: string
}

export function AnimatedCard({
  children,
  className,
  glowOnHover = true,
  tiltEffect = true,
  glowColor = "rgba(0, 112, 243, 0.2)",
  ...props
}: AnimatedCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Limit the rotation to a smaller range for more subtle effect
    const rotateXValue = ((y - centerY) / centerY) * 3
    const rotateYValue = ((centerX - x) / centerX) * 3

    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      setRotateX(rotateXValue)
      setRotateY(rotateYValue)
    })
  }

  const resetTilt = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovering(false)
        resetTilt()
      }}
    >
      {glowOnHover && (
        <div
          className={cn(
            "absolute -inset-0.5 rounded-lg blur opacity-0 transition-opacity duration-300",
            isHovering ? "opacity-75" : "opacity-0",
          )}
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300 border-gray-800 bg-black/50 backdrop-blur-sm will-change-transform",
          isHovering && "shadow-lg shadow-primary-500/20",
          className,
        )}
        style={{
          transform:
            isHovering && tiltEffect
              ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: "transform 0.2s ease-out",
        }}
        {...props}
      >
        <CardContent className="p-6 relative z-10">{children}</CardContent>
      </Card>
    </div>
  )
}

