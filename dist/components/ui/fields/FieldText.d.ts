import React from "react";
import { TypographyVariants } from "../../../types";
type FieldTextProps = {
  value?: any;
  label?: string;
  placeholder?: string;
  variant?: TypographyVariants;
  color?: string;
  rest?: any;
};
declare const FieldText: React.FC<FieldTextProps>;
export default FieldText;
