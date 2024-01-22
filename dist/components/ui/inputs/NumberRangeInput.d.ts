import React from "react";
import { SyntheticEvent } from "../../../types";
type NumberRangeInputProps = {
  label?: string;
  name: string;
  value?: number[];
  handleChange: (value: SyntheticEvent) => void;
  currency?: string;
};
declare const NumberRangeInput: React.FC<NumberRangeInputProps>;
export default NumberRangeInput;
