import classNames from "classnames"
import styles from "./Hero.module.css"
import { garamond, unica } from "@/app/fonts"

const Hero = () => (
  <h2 className={classNames(styles.hero)}>
    <div className={styles.spacer} />
    <div className={styles.heroText}>
      <span className={styles.firstWord}>Retaliation </span>
      <span className={classNames(styles.restOfHero, unica.className)}>
        in the media industry during the war on Gaza
      </span>
    </div>
    <div className={styles.spacer} />
  </h2>
)

export default Hero
