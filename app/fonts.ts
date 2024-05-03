import { EB_Garamond } from "next/font/google"
import localFont from "next/font/local"

export const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["italic", "normal"],
})

export const unica = localFont({
  src: "../public/unica.woff2",
  display: "swap",
})
