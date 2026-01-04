import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { Toaster } from "react-hot-toast"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nikosta.in"),
  title: {
    default: "Nikosta - Expert Web Development & App Development Services | Custom Software Solutions",
    template: "%s | Nikosta - Web & App Development",
  },
  description:
    "Nikosta is a leading web development and app development company specializing in custom websites, mobile applications (iOS & Android), and innovative software solutions. Transform your business with our expert development team.",
  keywords: [
    "web development",
    "app development",
    "mobile app development",
    "website development",
    "custom software development",
    "iOS app development",
    "Android app development",
    "responsive web design",
    "e-commerce development",
    "progressive web apps",
    "PWA development",
    "cross-platform apps",
    "React development",
    "Next.js development",
    "Node.js development",
    "full stack development",
    "frontend development",
    "backend development",
    "UI/UX design",
    "web design services",
    "mobile app design",
    "custom web applications",
    "enterprise software solutions",
    "cloud solutions",
    "cloud migration",
    "AWS services",
    "Azure solutions",
    "DevOps services",
    "API development",
    "database design",
    "technology consulting",
    "digital transformation",
    "software consulting",
    "agile development",
    "web development company",
    "app development company",
    "software development agency",
    "Nikosta",
    "Nikosta tech",
  ],
  authors: [{ name: "Nikosta Team", url: "https://www.nikosta.in/about" }],
  creator: "Nikosta",
  publisher: "Nikosta",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nikosta.in",
    siteName: "Nikosta - Web & App Development",
    title: "Nikosta - Expert Web Development & App Development Services",
    description:
      "Transform your business with Nikosta's professional web development and app development services. We create custom websites, mobile applications, and innovative software solutions tailored to your needs.",
    images: [
      {
        url: "https://www.nikosta.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nikosta - Web Development & App Development Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikosta - Expert Web Development & App Development",
    description:
      "Leading web development and app development company. Custom websites, mobile apps, and software solutions for businesses worldwide.",
    images: ["https://www.nikosta.in/twitter-image.jpg"],
    creator: "@nikosta",
    site: "@nikosta",
  },
  alternates: {
    canonical: "https://www.nikosta.in",
    languages: {
      "en-US": "https://www.nikosta.in",
    },
  },
  category: "Technology",
  classification: "Web Development & App Development Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
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
  alternateName: "Nikosta Tech",
  url: "https://www.nikosta.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.nikosta.in/logo.png",
    width: "250",
    height: "60",
  },
  description:
    "Nikosta is a professional web development and app development company delivering custom websites, mobile applications, and innovative software solutions for businesses worldwide. Expert team specializing in React, Next.js, Node.js, iOS, and Android development.",
  foundingDate: "2020",
  slogan: "Transforming Business Through Technology",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@nikosta.in",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  sameAs: [
    "https://www.linkedin.com/company/nikosta",
    "https://twitter.com/nikosta",
    "https://www.facebook.com/nikosta",
    "https://github.com/nikosta",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  knowsAbout: [
    "Web Development",
    "App Development",
    "Mobile Application Development",
    "Software Engineering",
    "Cloud Computing",
    "UI/UX Design",
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Solutions & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Professional custom website development with responsive design, modern frameworks (React, Next.js), e-commerce solutions, CMS integration, and progressive web apps (PWA).",
          serviceType: "Web Development",
          provider: {
            "@type": "Organization",
            name: "Nikosta",
          },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Native and cross-platform mobile application development for iOS and Android with expert UI/UX design, app maintenance, and ongoing support.",
          serviceType: "App Development",
          provider: {
            "@type": "Organization",
            name: "Nikosta",
          },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
          description:
            "Scalable cloud infrastructure setup, cloud migration services, serverless architecture, and DevOps implementation on AWS, Azure, and Google Cloud.",
          serviceType: "Cloud Computing",
          provider: {
            "@type": "Organization",
            name: "Nikosta",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Tailored software solutions, enterprise applications, API development, database design, and full-stack development services.",
          serviceType: "Software Development",
          provider: {
            "@type": "Organization",
            name: "Nikosta",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "User-centered design services for web and mobile applications, wireframing, prototyping, and complete design systems.",
          serviceType: "Design Services",
          provider: {
            "@type": "Organization",
            name: "Nikosta",
          },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data - Enhanced for web and app development */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.nikosta.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.nikosta.in/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "About",
                  item: "https://www.nikosta.in/about",
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="application-name" content="Nikosta" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nikosta" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />

        {/* Business/Organization Tags */}
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nikosta - Web & App Development" />

        <meta property="article:publisher" content="https://www.nikosta.in" />
        <meta property="article:author" content="Nikosta Team" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TB83RNGW');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-white font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TB83RNGW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics gtag.js scripts */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PDRBMYWTYL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDRBMYWTYL');
          `}
        </Script>

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
        <Analytics />
      </body>
    </html>
  )
}
