"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  // Function to handle navigation
  const navigateTo = (path: string) => {
    window.location.href = path
  }

  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white py-16 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <div onClick={() => navigateTo("/")} className="flex items-center cursor-pointer">
              <Image src="/Logoico.png" alt="Nikosta" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-400">
              Delivering innovative technology solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://github.com/nikostaTech", "_blank")}
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </button>
              <button
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/company/nikosta/about/?viewAsMember=true", "_blank")}
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <button
              onClick={() => navigateTo("/about")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo("/portfolio")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => navigateTo("/services")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => navigateTo("/contact")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <button
              onClick={() => navigateTo("/services#software-development")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Software Development
            </button>
            <button
              onClick={() => navigateTo("/services#cloud-solutions")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Cloud Solutions
            </button>
            <button
              onClick={() => navigateTo("/services#data-analytics")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Data Analytics
            </button>
            <button
              onClick={() => navigateTo("/services#cybersecurity")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              Cybersecurity
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-400">Delta 2</p>
            <p className="text-sm text-gray-400">Greater Noida, UP</p>
            <button
              onClick={() => (window.location.href = "mailto:info@nikosta.in")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              info@nikosta.com
            </button>
            <button
              onClick={() => (window.location.href = "tel:+91 9560603635")}
              className="text-sm text-left text-gray-400 hover:text-primary-500 transition-colors"
            >
              +91 956060 3635
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nikosta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

