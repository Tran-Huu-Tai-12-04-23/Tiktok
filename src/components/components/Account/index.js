import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import styles from "./Account.module.scss";

function Account() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        className={styles.avatar}
        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c8afc0e0a56ce9fc269ffeef94091d50~c5_100x100.jpeg?x-expires=1669838400&x-signature=1Bh%2BLZzJJqGg703FBab8aTez6%2Bk%3D'
        alt='avatar'
      />
      <div className={clsx(styles.item)}>
        <h5 className={clsx(styles.name)}>
          Nguoi dung 1
          <FontAwesomeIcon className={clsx(styles.check__icon)}icon={faCircleCheck} />
        </h5>
        <span className={clsx(styles.name__account)}>nguoidung1</span>
      </div>
    </div>
  );
}

export default Account;
