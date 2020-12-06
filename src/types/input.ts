import { Dispatch, SetStateAction } from "react";

export interface InputInterface {
  label: string;
  type: string;
  value: string;
  onChange: Dispatch<SetStateAction<boolean>>;
}
