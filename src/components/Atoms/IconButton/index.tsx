import { useMemo } from "react";
import classNames from "classnames/bind";
import type { IconButtonProps } from "@/types/IconButton";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const IconButton = ({
  label,
  size = 32,
  iconWidth = 24,
  iconHeight = 24,
  variant = "ghost",
  appearance,
  type = "button",
  borderColor,
  icon,
  iconColor,
  onClick,
  className,
  ...otherProps
}: IconButtonProps) => {
  const svgStyle = useMemo(() => {
    return {
      width: `${iconWidth}px`,
      height: `${iconHeight}px`,
      color: iconColor,
    };
  }, [iconWidth, iconHeight, iconColor]);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(
        `btn-icon`,
        `btn-icon--${appearance}`,
        `btn-icon--${size}`,
        `btn-icon--${variant}`,
        className,
      )}
      style={{
        borderColor,
      }}
      aria-label={label}
      onClick={onClick}
      {...otherProps}
    >
      <svg
        className={cx(`btn-icon__icon`)}
        focusable="false"
        aria-hidden="true"
        style={svgStyle}
      >
        <use xlinkHref={`/svg/icons.svg#${icon}`} />
      </svg>
    </button>
  );
};

export default IconButton;
