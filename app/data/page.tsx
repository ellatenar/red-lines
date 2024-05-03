import classNames from "classnames"
import { garamond } from "../fonts"
import styles from "./Data.module.css"

export default function Data() {
  return (
    <main className={styles.main}>
      <div className={classNames(styles.darkContainer, garamond.className)}>
        BBBBBB
      </div>
    </main>
  )
}
