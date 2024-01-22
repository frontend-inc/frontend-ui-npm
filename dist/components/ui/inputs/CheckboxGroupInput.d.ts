import React from "react";
import { Option } from "../../../types";
type CheckboxGroupInputProps = {
    errors: any;
    name: string;
    label: string;
    value?: string[];
    options: Option[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const CheckboxGroupInput: React.FC<CheckboxGroupInputProps>;
export default CheckboxGroupInput;
