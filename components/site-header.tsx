"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center px-4 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <Image src="/Logoico.png" alt="Nikosta" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-primary-500/20">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-white"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden">
          <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Nikosta" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-white"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container px-4 py-10">
            <nav className="flex flex-col space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-white/80 transition-colors hover:text-white tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-primary-500/20 py-6 text-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

