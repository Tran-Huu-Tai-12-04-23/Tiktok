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
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";
import {
  Wrapper as SearchWrapper,
  Account as SearchAccount,
} from "~/components";

const searchResult = [];
function Header() {
  return (
    <div className={clsx(styles.wraper)}>
      <div className={clsx(styles.container)}>
        <img src={logo} alt='tiktok' />

        <div className={clsx(styles.search)}>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            // trigger='click'
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
            <input placeholder='Tìm kiếm tài khoản và video' />
          </Tippy>

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
          <button className={clsx(styles.btn_upfile)}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Tải lên</span>
          </button>
          <button className={clsx(styles.login_btn)}>Đăng Nhập</button>
          <FontAwesomeIcon
            className={clsx(styles.more__options_icon)}
            icon={faEllipsisVertical}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
