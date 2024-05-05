import classNames from "classnames"
import styles from "./PullQuote.module.css"
import { unica } from "@/app/fonts"

interface Props extends React.PropsWithChildren {
  left?: boolean
  right?: boolean
  serif?: boolean
  noPadding?: boolean
}

const PullQuote: React.FC<Props> = ({
  children,
  left,
  right,
  serif,
  noPadding,
}) => (
  <span
    className={classNames(
      styles.pullQuote,
      left && styles.pullQuoteLeft,
      right && styles.pullQuoteRight,
      !serif && unica.className,
      noPadding && styles.noPadding
    )}
  >
    {children}
  </span>
)

export default PullQuote
