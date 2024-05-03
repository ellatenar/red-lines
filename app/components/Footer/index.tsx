import { unica } from "@/app/fonts"
import styles from "./Footer.module.css"
import NWU_FSP from "@/public/images/nwu_fsp.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={unica.className}>
        <div>
          A project by National Writers Union and Freelance Solidarity Project.
        </div>
        <div>
          Web design by{" "}
          <a href="https://georgia-castellano.com/" target="_blank">
            Georgia Castellano
          </a>
          .
        </div>
        <div>
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
