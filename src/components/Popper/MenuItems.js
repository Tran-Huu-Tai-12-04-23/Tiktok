import clsx from "clsx";
import styles from "./Popper.module.scss";

import { Button as ContentPopper } from "~/components";

function MenuItems({ data }) {
  return (
    <ContentPopper className={styles["content__item"]} leftIcon={data.leftIcon}>
      {data.title}
    </ContentPopper>
  );
}

export default MenuItems;
