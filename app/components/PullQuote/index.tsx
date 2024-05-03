import classNames from "classnames"
import styles from "./PullQuote.module.css"
import { unica } from "@/app/fonts"

interface Props extends React.PropsWithChildren {
  left?: boolean
  right?: boolean
  serif?: boolean
}

const PullQuote: React.FC<Props> = ({ children, left, right, serif }) => (
  <span
    className={classNames(
      styles.pullQuote,
      left && styles.pullQuoteLeft,
      right && styles.pullQuoteRight,
      !serif && unica.className
    )}
  >
    {children}
  </span>
)

export default PullQuote
