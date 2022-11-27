import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";
// import library
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

console.log(styles);
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

          <button className={clsx(styles.search_btn)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
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
