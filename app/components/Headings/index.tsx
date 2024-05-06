"use client"

import classNames from "classnames"
import { unica } from "../../fonts"
import Image from "next/image"
import share from "@/public/images/share.svg"
import styles from "./Headings.module.css"
import { usePathname } from "next/navigation"
import { useState } from "react"

const BASE_URL = "https://redlines.nwu.org"

interface Props extends React.PropsWithChildren {
  className?: string
  id?: string
}

export const Heading: React.FC<Props> = ({ className, children }) => (
  <h1 className={classNames(className, unica.className)}>{children}</h1>
)

export const Subheading: React.FC<Props> = ({ className, children, id }) => {
  const path = usePathname()
  const [copied, setCopied] = useState(false)

  return (
    <h3 className={classNames(className, unica.className)} id={id}>
      {children}
    </h3>
  )
  // <div className={styles.subheadingContainer}>
  //   <button
  //     className={classNames(styles.shareButton)}
  //     onClick={() => {
  //       navigator.clipboard.writeText(
  //         `${BASE_URL}${path}${id ? `#${id}` : ""}`
  //       )
  //       setCopied(true)
  //       setTimeout(() => setCopied(false), 5000)
  //     }}
  //   >
  //     <Image
  //       src={share}
  //       alt="share"
  //       priority
  //       height={20}
  //       width={20}
  //       className={classNames(styles.share, copied && styles.copied}
  //     />
  //   </button>
  // </div>
}
