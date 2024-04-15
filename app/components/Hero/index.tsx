import classNames from "classnames"
import styles from "./Hero.module.css"

const Hero = () => (
  <h2 className={styles.hero}>
    <div className={styles.line}>
      <span className={styles.text}>Censorship and</span>
      <div className={classNames(styles.erased, styles.right)} />
    </div>
    <div className={styles.line}>
      <div className={classNames(styles.erased, styles.left)} />
      <span className={styles.text}>retaliation in the</span>
    </div>
    <div className={styles.line}>
      <span className={styles.text}>media industry</span>
      <div className={styles.erased} />
      <span className={styles.text}>during</span>
    </div>
    <div className={styles.line}>
      <div className={classNames(styles.erased, styles.left)} />
      the genocide in Gaza
    </div>
  </h2>
)

export default Hero
