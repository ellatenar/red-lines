import classNames from "classnames"
import styles from "./Ruler.module.css"

const Ruler = () => {
  return (
    <div className={styles.rulerContainer}>
      <div className={styles.ruler}>
        {Array(10)
          .fill("")
          .map((_, i) => (
            <div key={i} className={styles.cm}>
              {Array(5)
                .fill("")
                .map((_, j) => (
                  <div
                    key={j}
                    className={classNames(i == 9 && j == 4 ? "" : styles.mm)}
                  ></div>
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Ruler
