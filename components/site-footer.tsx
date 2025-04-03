import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/BrandLogo.png" alt="Nikosta" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-gray-400">
              Delivering innovative technology solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <Link href="/about" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              About Us
            </Link>
            <Link href="/portfolio" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              Case Studies
            </Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              Solutions
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <Link
              href="/services#software-development"
              className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
            >
              Software Development
            </Link>
            <Link
              href="/services#cloud-solutions"
              className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
            >
              Cloud Solutions
            </Link>
            <Link
              href="/services#data-analytics"
              className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
            >
              Data Analytics
            </Link>
            <Link
              href="/services#cybersecurity"
              className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
            >
              Cybersecurity
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-400">Delta 2 G Block</p>
            <p className="text-sm text-gray-400">Greater Noida, UP</p>
            <p className="text-sm text-gray-400">info@nikosta.in</p>
            <p className="text-sm text-gray-400">+91 9570248629</p>
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

