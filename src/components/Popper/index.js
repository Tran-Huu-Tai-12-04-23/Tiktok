import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";

import styles from "./Popper.module.scss";
import { Wrapper as WrapperPopper } from "~/components";
import MenuItems from "./MenuItems";

function Popper({ children, datas = [] }) {
  const renderDatas = () => {
    return datas.map((data, index) => {
      return <MenuItems key={index} data={data}></MenuItems>;
    });
  };
  return (
    <Tippy
      interactive
      // visible
      // trigger='click'
      delay={[0, 700]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={clsx(styles.wrapper)} tabIndex='-1' {...attrs}>
          <WrapperPopper>{renderDatas()}</WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Popper;
