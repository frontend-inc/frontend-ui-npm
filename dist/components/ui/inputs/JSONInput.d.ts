import React from "react";
import { SyntheticEvent } from "../../../types";
type JSONInputProps = {
  errors: Record<string, string>;
  value: any;
  name: string;
  label?: string;
  placeholder?: string;
  handleChange: (e: SyntheticEvent) => void;
};
declare const JSONInput: React.FC<JSONInputProps>;
export default JSONInput;
