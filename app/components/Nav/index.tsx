"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./Nav.module.css"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import pointer from "../../images/pointer.svg"
import { garamond } from "@/app/fonts"
import classNames from "classnames"

interface NavProps {
  links: { name: string; href: string }[]
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<string>(pathname)

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

  return (
    <div className={styles.navContainer}>
      <nav className={classNames(styles.nav, garamond.className)}>
        {links.map((link) => (
          <div key={link.href} className={styles.navLinkContainer}>
            <Link href={link.href}>{link.name}</Link>
            {currentPage === link.href && (
              <Image
                priority
                className={styles.pointer}
                src={pointer}
                alt=""
                width={10}
              />
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Nav
