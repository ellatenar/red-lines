import styles from "./page.module.css"
import Nav from "./components/Nav"
import Ruler from "./components/Ruler"
import background from "./images/background.png"
import NextBgImage from "next-bg-image"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.darkContainer}>
        <div>
          <div className={styles.contentInitial}>
            <h1 className={styles.title}>Red Lines</h1>
            <Hero />
          </div>
        </div>
      </div>
      <NextBgImage src={background} style={{ width: "100%" }}>
        <div className={styles.lightContainer}>Lorem ipsum</div>
      </NextBgImage>
      <footer>
        <div className={styles.footerContent}>THIS IS THE FOOTER</div>
      </footer>
    </main>
  )
}
