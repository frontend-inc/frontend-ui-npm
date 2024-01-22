import React from "react";
import { InputProps } from "../../../types";
type SwitchInputProps = InputProps & {
  disableBorder?: boolean;
};
declare const SwitchInput: React.FC<SwitchInputProps>;
export default SwitchInput;
