import type { Metadata } from "next"
import "./globals.css"
import Nav from "./components/Nav"
import Ruler from "./components/Ruler"

export const metadata: Metadata = {
  title: "Red Lines",
  description:
    "Censorship and retaliation in the media industry during the genocide in Gaza",
}

const links = [
  { name: "Home", href: "/" },
  { name: "Data", href: "/data" },
  { name: "Violent Repression", href: "/violent-repression" },
  { name: "Discussion", href: "/discussion" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "Methodology", href: "/methodology" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Nav links={links} />
        <Ruler />
        {children}
      </body>
    </html>
  )
}
