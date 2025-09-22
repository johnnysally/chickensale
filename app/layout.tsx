import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mkulima Farm - Premium Chickens & Poultry Products",
  description:
    "Discover quality chickens and fresh poultry products from Mkulima Farm. Premium layers, broilers, Kienyeji chickens, fresh eggs, and day-old chicks raised with care in Thika, Kenya.",
  generator: "v0.app",
  keywords: "chickens, poultry, Mkulima Farm, Thika, Kenya, layers, broilers, eggs, day-old chicks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
