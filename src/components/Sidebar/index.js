import styles from "./Sidebar.module.scss";

//import libary
import clsx from "clsx";

function Sidebar() {
  return <h1 className={clsx(styles.wrapper)}>Sidebar pages</h1>;
}

export default Sidebar;
