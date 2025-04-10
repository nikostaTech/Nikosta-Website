"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/services" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  // Handle scroll events
  useEffect(() => {
    // Check initial scroll position
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Handle body scroll locking without changing scroll position
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling but don't change position
      document.body.style.overflow = "hidden"

      // Force repaint to ensure menu is visible
      setTimeout(() => {
        const mobileMenu = document.getElementById("mobile-menu")
        if (mobileMenu) {
          mobileMenu.style.display = "none"
          // Force a reflow
          void mobileMenu.offsetHeight
          mobileMenu.style.display = "flex"
        }
      }, 0)
    } else {
      // Restore scrolling
      document.body.style.overflow = ""
    }

    return () => {
      // Clean up
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg" : "bg-black",
        )}
      >
        <div className="container flex h-16 sm:h-18 md:h-20 items-center px-4 sm:px-6">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logoico.png"
                alt="Nikosta"
                width={120}
                height={40}
                className="h-8 sm:h-9 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-primary-500/20 text-xs sm:text-sm whitespace-nowrap">
                  Get Started
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 text-white"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Completely separate from header */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[9999] md:hidden flex flex-col"
          style={{
            backgroundColor: "#000000",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="container flex h-16 sm:h-18 items-center justify-between px-4 sm:px-6 border-b border-gray-800"
            style={{ backgroundColor: "#000000" }}
          >
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image src="/Logoico.png" alt="Nikosta" width={120} height={40} className="h-8 sm:h-9 w-auto" priority />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 text-white"
              onClick={closeMenu}
              aria-label="Close menu"
              type="button"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div
            className="container px-4 py-6 sm:py-10 flex-grow flex flex-col overflow-y-auto"
            style={{ backgroundColor: "#000000" }}
          >
            <nav className="flex flex-col space-y-6 flex-grow">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl sm:text-2xl font-medium text-white/80 transition-colors hover:text-white tracking-tight"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto py-6" style={{ backgroundColor: "#000000" }}>
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-primary-500/20 py-4 sm:py-6 text-base sm:text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
