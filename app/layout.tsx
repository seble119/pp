import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seble H/mariam - Full Stack Developer",
  description:
    "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and collaborations.",
  keywords:
    "Full Stack Developer, React Developer, Next.js, Node.js, Web Development, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Seble H/mariam" }],
  creator: "Seble H/mariam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seblehmariam.dev",
    title: "Seble H/mariam - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in modern web technologies.",
    siteName: "Seble H/mariam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seble H/mariam - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in modern web technologies.",
    creator: "@seblehmariam",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
