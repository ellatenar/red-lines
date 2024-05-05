import styles from "./Button.module.css"
import Image from "next/image"
import triangle from "@/public/images/triangle.svg"
import { NavItem } from "../Nav"

interface Props {
  navItem: NavItem
}

const Button: React.FC<Props> = ({ navItem }) => {
  return (
    <a href={navItem.href} className={styles.buttonContainer}>
      <div className={styles.button}>
        <div className={styles.text}>{navItem.name}</div>
        <div className={styles.spacer} />
        <Image
          priority
          className={styles.pointer}
          src={triangle}
          alt=""
          width={25}
          height={25}
        />
      </div>
    </a>
  )
}

export default Button
