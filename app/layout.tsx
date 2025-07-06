import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { Toaster } from "react-hot-toast"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nikosta",
  url: "https://www.nikosta.in",
  logo: "https://www.nikosta.in/logo.png",
  description:
    "Nikosta delivers cutting-edge technology solutions including software development, cloud services, AI integration, and digital transformation for enterprises worldwide.",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "Customer Service",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  sameAs: [
    "https://www.linkedin.com/company/nikosta",
    "https://twitter.com/nikosta",
    "https://www.facebook.com/nikosta",
  ],
  serviceArea: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
          description: "Custom software solutions tailored to business needs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
          description: "Scalable cloud infrastructure and migration services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
          description: "Complete digital transformation services for enterprises",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Additional Meta Tags */}
        <meta name="application-name" content="Nikosta" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nikosta" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Business/Organization Tags */}
        <meta property="business:contact_data:street_address" content="India" />
        <meta property="business:contact_data:locality" content="India" />
        <meta property="business:contact_data:region" content="India" />
        <meta property="business:contact_data:postal_code" content="" />
        <meta property="business:contact_data:country_name" content="India" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: "#1d1d1d",
                color: "#fff",
                borderRadius: "8px",
                padding: "16px",
                fontSize: "1rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                border: "none",
              },
              success: {
                style: {
                  background: "#16a34a",
                  border: "none",
                },
                iconTheme: {
                  primary: "#ffffff",
                  secondary: "#16a34a",
                },
              },
              error: {
                style: {
                  background: "#dc2626",
                  border: "none",
                },
                iconTheme: {
                  primary: "#ffffff",
                  secondary: "#dc2626",
                },
              },
            }}
          />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
