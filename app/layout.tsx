import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nikosta.in"),
  title: {
    default: "Nikosta - Advanced Technology Solutions | Software Development & Digital Transformation",
    template: "%s | Nikosta",
  },
  description:
    "Nikosta delivers cutting-edge technology solutions including software development, cloud services, AI integration, and digital transformation for enterprises worldwide. Transform your business with our expert team.",
  keywords: [
    "technology solutions",
    "software development",
    "digital transformation",
    "cloud services",
    "AI integration",
    "web development",
    "mobile app development",
    "enterprise solutions",
    "custom software",
    "IT consulting",
    "DevOps services",
    "cybersecurity",
    "data analytics",
    "business automation",
    "Nikosta",
  ],
  authors: [{ name: "Nikosta Team" }],
  creator: "Nikosta",
  publisher: "Nikosta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nikosta.in",
    siteName: "Nikosta",
    title: "Nikosta - Advanced Technology Solutions | Software Development & Digital Transformation",
    description:
      "Nikosta delivers cutting-edge technology solutions including software development, cloud services, AI integration, and digital transformation for enterprises worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nikosta - Advanced Technology Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikosta - Advanced Technology Solutions",
    description:
      "Transform your business with cutting-edge technology solutions. Software development, cloud services, AI integration & more.",
    images: ["/twitter-image.jpg"],
    creator: "@nikosta",
    site: "@nikosta",
  },
  alternates: {
    canonical: "https://www.nikosta.in",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
