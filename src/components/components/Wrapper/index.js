import clsx from "clsx";
import styles from "./Wrapper.module.scss";

function Wrapper({ children }) {
  return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default Wrapper;
