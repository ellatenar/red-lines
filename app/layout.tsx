import type { Metadata } from "next"
import "./globals.css"
import Nav from "./components/Nav"
import Ruler from "./components/Ruler"
import { garamond } from "./fonts"
import Footer from "./components/Footer"
import { links } from "./links"

export const metadata: Metadata = {
  title: {
    template: "%s | Red Lines",
    default: "Red Lines",
  },
  description: "Retaliation in the Media Industry During Israel’s War on Gaza",
  publisher: "National Writers Union and Freelance Solidarity Project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <Nav links={links} />
        <Ruler />
        {children}
        <Footer />
      </body>
    </html>
  )
}
