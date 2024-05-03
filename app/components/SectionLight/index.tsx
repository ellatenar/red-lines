import styles from "./SectionLight.module.css"
import NextBgImage from "next-bg-image"
import background from "@/public/images/background.png"

const SectionLight: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextBgImage src={background} style={{ width: "100%" }}>
    <div className={styles.lightContainerContent}>{children}</div>
  </NextBgImage>
)

export default SectionLight
