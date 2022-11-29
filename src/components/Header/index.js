// import library
import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";
import {
  Wrapper as SearchWrapper,
  Account as SearchAccount,
  Button,
} from "~/components";

// const searchResult = [];
function Header() {
  return (
    <div className={clsx(styles.wraper)}>
      <div className={clsx(styles.container)}>
        <img src={logo} alt='tiktok' />
        <Tippy
          interactive
          // visible={searchResult.length > 0}
          // trigger='click'
          placement='bottom-start'
          render={(attrs) => (
            <div
              className={clsx(styles.search__result)}
              tabIndex='-1'
              {...attrs}
            >
              <SearchWrapper>
                <h3 className={clsx(styles.title)}>Accounts</h3>
                <SearchAccount />
                <SearchAccount />
                <SearchAccount />
                <SearchAccount />
                <SearchAccount />
              </SearchWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={clsx(styles.options_header)}>
          <Button iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
            Tai len
          </Button>
          <Button primary>Dang Nhap</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
