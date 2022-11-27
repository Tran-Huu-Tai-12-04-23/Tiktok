import { Header, Sidebar } from "~/components";
import styles from "./Defaultlayout.module.scss";

import clsx from "clsx";

function Defaultlayout({ children }) {
  return (
    <div>
      <Header />
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.wrapper)}>
          <Sidebar />
          <div className={clsx(styles.content)}></div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Defaultlayout;
