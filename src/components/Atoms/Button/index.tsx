import { ButtonHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 외형
   */
  appearance?: "rectangle" | "round";
  /**
   * 기능 유형
   */
  type: "button" | "submit" | "reset";
  /**
   * 크기 (높이 기준, 너비는 상위 컴포넌트에서 결정) <br>
   * <span className="warn">⚠ 12, 13, 14는 text variant에 사용</span>
   */
  size: 12 | 13 | 14 | 24 | 32 | 40;
  /**
   * 색상
   */
  color?: "primary" | "secondary" | "teritary" | "action" | "indistinct";
  /**
   * 형태
   */
  variant: "filled" | "outline" | "text";
  /**
   * 버튼 레이블
   */
  label: string;
  /**
   * 아이콘 이름 (SVG Symbol id) <br/>
   * <span className="warn">⚠ `public/svg/icons.svg` 파일에 등록 필수!!</span>
   */
  icon?: string;
  /**
   * 아이콘 위치
   */
  iconPos?: "before" | "after";
  /**
   * 아이콘 색상 <br/>
   * in hexcode or variable
   */
  iconColor?: string;
  /**
   * 밑줄 사용 여부
   */
  underline?: boolean;
  /**
   * 버튼 클릭 시 수행할 콜백 함수
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * 기본 버튼 컴포넌트 <br>
 * 제한 된 조합을 통해 버튼 스타일이 결정 됨 (디자인에 정의 된 조합형태만 구현)
 */
const Button = ({
  appearance = "rectangle",
  type = "button",
  size = 32,
  color = "primary",
  variant = "filled",
  label,
  icon,
  iconPos,
  iconColor,
  underline = false,
  onClick,
  className,
  ...otherProps
}: Props): JSX.Element => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(
        `btn`,
        `btn--${size}`,
        `btn--${appearance}`,
        `btn--${color}`,
        `btn--${variant}`,
        { [`btn--underline`]: underline },
        className,
      )}
      onClick={onClick}
      {...otherProps}
    >
      {iconPos === `before` && icon ? (
        <svg
          className={cx(`btn__icon`)}
          focusable="false"
          aria-hidden="true"
          style={{ color: iconColor }}
        >
          <use xlinkHref={`/svg/icons.svg#${icon}`} />
        </svg>
      ) : (
        ``
      )}
      {label}
      {iconPos === `after` && icon ? (
        <svg
          className={cx(`btn__icon`)}
          focusable="false"
          aria-hidden="true"
          style={{ color: iconColor }}
        >
          <use xlinkHref={`/svg/icons.svg#${icon}`} />
        </svg>
      ) : (
        ``
      )}
    </button>
  );
};

export default Button;
