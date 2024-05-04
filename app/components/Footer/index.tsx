import { unica } from "@/app/fonts"
import styles from "./Footer.module.css"
import Image from "next/image"
import FSPLogo from "@/public/images/fsp-logo.png"
import NWULogo from "@/public/images/nwu-logo.png"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={unica.className}>
        <div className={styles.logoContainer}>
          <a href="https://freelancesolidarity.org/">
            <Image
              src={FSPLogo}
              alt="FSP logo"
              className={styles.fspLogo}
              object-fit="contain"
              height={100}
            />
          </a>
          <a href="https://nwu.org/">
            <Image
              src={NWULogo}
              alt="NWU logo"
              className={styles.nwuLogo}
              object-fit="contain"
              height={100}
            />
          </a>
        </div>
        <div className={styles.attribution}>
          A project by{" "}
          <a href="https://freelancesolidarity.org/">
            Freelance Solidarity Project
          </a>{" "}
          and <a href="https://nwu.org/">National Writers Union</a>.
        </div>
        <div className={styles.georgia}>
          Web design by{" "}
          <a href="https://georgia-castellano.com/" target="_blank">
            Georgia Castellano
          </a>
          .
        </div>
        <div className={styles.ella}>
          Design and development by{" "}
          <a href="https://heron.zone/" target="_blank">
            Ella Heron
          </a>
          .
        </div>
        {/* <Image
          src={NWU_FSP}
          alt="logos of National Writers Union and Freelance Solidarity Project"
          height={200}
        /> */}
      </div>
    </footer>
  )
}
