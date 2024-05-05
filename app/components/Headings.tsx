import classNames from "classnames"
import { unica } from "../fonts"

interface Props extends React.PropsWithChildren {
  className?: string
}

export const Heading: React.FC<Props> = ({ className, children }) => (
  <h1 className={classNames(className, unica.className)}>{children}</h1>
)

export const Subheading: React.FC<Props> = ({ className, children }) => (
  <h3 className={classNames(className, unica.className)}>{children}</h3>
)
