"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  // Ensure the text is properly rendered after mount
  useEffect(() => {
    if (textRef.current) {
      // Force a repaint to ensure gradient is applied correctly
      textRef.current.style.display = "inline-block"
    }
  }, [])

  return (
    <span
      ref={textRef}
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 animate-gradient-x bg-[length:200%_auto] inline-block",
        className,
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  )
}

