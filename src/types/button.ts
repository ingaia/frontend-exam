import { Dispatch, SetStateAction } from "react";

export interface ButtonInterface {
  label: string;
  onClick?: Dispatch<SetStateAction<boolean>>;
  disable?: boolean;
  noBorder?: boolean;
  noMargin?: boolean;
  onlyMobile?: boolean;
  longButton?: boolean;
}
