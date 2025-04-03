"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface GlowingButtonProps extends ButtonProps {
  glowColor?: string
  hoverGlowColor?: string
}

export function GlowingButton({
  children,
  className,
  glowColor = "rgba(0, 112, 243, 0.5)",
  hoverGlowColor = "rgba(0, 112, 243, 0.8)",
  ...props
}: GlowingButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute -inset-0.5 rounded-lg blur opacity-75 transition-all duration-300 group-hover:opacity-100",
          isHovering ? "scale-105" : "scale-100",
        )}
        style={{
          background: `radial-gradient(circle, ${isHovering ? hoverGlowColor : glowColor} 0%, transparent 70%)`,
          pointerEvents: "none", // Ensure the glow doesn't interfere with clicks
        }}
      />
      <Button
        className={cn(
          "relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 z-10",
          className,
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        type="button"
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}

