import classNames from "classnames"
import { unica } from "../fonts"

interface Props extends React.PropsWithChildren {
  className?: string
  id?: string
}

export const Heading: React.FC<Props> = ({ className, children }) => (
  <h1 className={classNames(className, unica.className)}>{children}</h1>
)

export const Subheading: React.FC<Props> = ({ className, children, id }) => (
  <h3 className={classNames(className, unica.className)} id={id}>
    {children}
  </h3>
)
