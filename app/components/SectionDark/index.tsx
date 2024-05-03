import React from "react"
import styles from "./SectionDark.module.css"

const SectionDark: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.darkContainer}>
    <div className={styles.darkContainerContent}>{children}</div>
  </div>
)

export default SectionDark
