import type React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikosta - Advanced Technology Solutions",
  description:
    "Nikosta delivers innovative technology solutions that drive business growth and digital transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
      </body>
    </html>
  );
}
