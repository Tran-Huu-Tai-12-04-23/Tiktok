import clsx from "clsx";

import styles from "./Button.module.scss";
function Button({
  primary,
  rounded,
  small,
  large,
  outline,
  to,
  href,
  onClick,
  iconLeft,
  children,
  ...moreProps
}) {
  const classNames = clsx(
    styles.wrapper,
    styles.normal,
    {
      [styles.small]: small,
    },
    {
      [styles.large]: large,
    },
    {
      [styles.outline]: outline,
    },
    {
      [styles.primary]: primary,
    },
    {
      [styles.rounded]: rounded,
    }
  );
  let StyleButton = "div";
  if (to) {
    StyleButton = "Link";
  } else if (href) {
    StyleButton = "a";
  }

  const props = {
    to,
    href,
    onClick,
  };

  return (
    <StyleButton className={classNames} {...props}>
      {iconLeft}
      <span className={clsx(styles.title)}>{children}</span>
    </StyleButton>
  );
}

export default Button;
