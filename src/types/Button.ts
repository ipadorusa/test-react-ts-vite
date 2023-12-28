import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
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
   * 아이콘 이름 (SVG Symbol id) <br>
   * <span className="warn">⚠ `public/svg/icons.svg` 파일에 등록 필수!!</span>
   */
  icon?: string;
  /**
   * 아이콘 위치
   */
  iconPos?: "before" | "after";
  /**
   * 밑줄 사용 여부
   */
  underline?: boolean;
  /**
   * 버튼 클릭 시 수행할 콜백 함수
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
