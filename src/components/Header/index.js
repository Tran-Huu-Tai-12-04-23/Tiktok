// import library
import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";
import { Button, Popper } from "~/components";

const menuItems = [
  {
    leftIcon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "Tiếng việt",
  },

  {
    leftIcon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Phản hổi và trợ giúp",
    to: "question",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Phím tắt trên bàn phím",
  },
  {
    rightIcon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    leftIcon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
    title: "Chuyển chủ đề",
  },
];
// const searchResult = [];
function Header() {
  return (
    <div className={clsx(styles.wraper)}>
      <div className={clsx(styles.container)}>
        <img src={logo} alt='tiktok' />

        <div className={clsx(styles.search)}>
          <input placeholder='Tìm kiếm tài khoản và video' />

          <div className={clsx(styles.icon_search)}>
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <Tippy
            placement='bottom'
            render={(attrs) => (
              <div className='box' tabIndex='-1' {...attrs}>
                Tìm kiếm
              </div>
            )}
          >
            <button className={clsx(styles.search_btn)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Tippy>
        </div>
        <div className={clsx(styles.options_header)}>
          <Button leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
            Tai len
          </Button>
          <Button primary>Dang Nhap</Button>
          <Popper datas={menuItems}>
            <FontAwesomeIcon
              className={clsx(styles.menu)}
              icon={faEllipsisVertical}
            />
          </Popper>
        </div>
      </div>
    </div>
  );
}

export default Header;
