"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PremiumBackButtonProps {
  href: string
  label?: string
  className?: string
}

export function PremiumBackButton({ href = "/", label = "Back", className = "" }: PremiumBackButtonProps) {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-20 sm:top-24 left-4 sm:left-6 z-40">
      <Link href={href}>
        <button
          className={cn(
            "group flex items-center gap-1.5 rounded-md transition-all duration-300",
            "bg-white/90 backdrop-blur-sm hover:bg-white",
            "border border-gray-200",
            "py-1.5 pl-1.5 pr-2.5",
            "text-xs font-medium text-gray-700",
            scrolled ? "shadow-md" : "shadow-sm hover:shadow-md",
            className,
          )}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-gray-100 transition-colors group-hover:bg-primary-50">
            <ArrowLeft className="h-3 w-3 text-gray-600 group-hover:text-primary-500 transition-all duration-300 group-hover:-translate-x-0.5" />
          </span>
          <span className="transition-colors duration-300 group-hover:text-primary-600">{label}</span>
        </button>
      </Link>
    </div>
  )
}
