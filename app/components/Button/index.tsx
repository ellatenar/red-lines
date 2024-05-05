import styles from "./Button.module.css"

const Button: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.button}>{props.children}</div>
}
