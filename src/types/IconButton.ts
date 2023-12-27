import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 외형
   */
  appearance?:
    | "round-rectangle"
    | "left-round-rectangle"
    | "right-round-rectangle"
    | "circle";
  /**
   * 크기 (높이 기준)
   */
  size: 16 | 24 | 32 | 40 | 60;
  /**
   * 아이콘 이름 (SVG Symbol id) <br>
   * <span className="warn">⚠ `public/svg/icons.svg` 파일에 등록 필수!!</span>
   */
  icon: string;
  /**
   * 아이콘 너비 (in px)
   */
  iconWidth: number;
  /**
   * 아이콘 높이 (in px)
   */
  iconHeight: number;
  /**
   * 형태
   */
  variant: "ghost" | "outline";
  /**
   * 기능 유형
   */
  type: "button" | "submit" | "reset";
  /**
   * 버튼 레이블
   */
  label: string;
  /**
   * 버튼 테두리 색상 (in hexcode or variable)
   */
  borderColor?: string;
  /**
   * 아이콘 색상 (in hexcode or variable)
   */
  iconColor?: string;
  /**
   * 버튼 클릭 시 수행할 콜백 함수
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
