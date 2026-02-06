import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, JetBrains_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { SpeedInsights } from "@vercel/speed-insights/next"
import { LenisProvider } from "@/components/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Pro Media House - Professional Media Production & Digital Marketing",
  description:
    "Empowering stories, engaging audiences. Video production, animation, digital marketing, website design, and IT consulting for brands worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`font-sans antialiased ${workSans.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  )
}
