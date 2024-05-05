"use client"

import { unica } from "@/app/fonts"
import styles from "./Footer.module.css"
import Image from "next/image"
import FSPLogo from "@/public/images/fsp-logo.png"
import NWULogo from "@/public/images/nwu-logo.png"
import { Octokit } from "@octokit/core"
import { useEffect, useState } from "react"

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })

export default function Footer() {
  const [lastModifiedDate, setLastModifiedDate] = useState("")

  useEffect(() => {
    const fetchLastModifiedDate = async () => {
      const result = await octokit.request(
        "GET /repos/ellatenar/red-lines/commits",
        {
          owner: "OWNER",
          repo: "REPO",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
      const timeString = result.data[0].commit.author.date
      return new Date(timeString).toLocaleDateString()
    }
    fetchLastModifiedDate().then((date) => setLastModifiedDate(date))
  }, [])

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
        {lastModifiedDate && (
          <div className={styles.timestamp}>
            Site last modified {lastModifiedDate}.
          </div>
        )}
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
