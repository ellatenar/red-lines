"use client"

import Link from "next/link"
import Image from "next/image"
import pointer from "@/public/images/pointer.svg"
import styles from "./Nav.module.css"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import classNames from "classnames"

interface NavProps {
  links: { name: string; href: string }[]
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<string>(pathname)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  return (
    <div className={styles.navContainer}>
      <div
        className={classNames(
          styles.bgContainer,
          openMenu && styles.openBgContainer
        )}
      >
        <div
          className={classNames(
            styles.hamburger,
            openMenu && styles.openBurger
          )}
          onClick={() => setOpenMenu((o) => !o)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setOpenMenu((o) => !o)
            }
            if (e.key === "Escape") {
              setOpenMenu(false)
            }
          }}
        >
          <span className={styles.topBun}></span>
          <span className={styles.bottomBun}></span>
        </div>
        <nav className={classNames(styles.nav, openMenu && styles.openNav)}>
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
    </div>
  )
}

export default Nav
