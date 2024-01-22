import React from "react";
import { SyntheticEvent } from "../../../types";
type FormFieldProps = {
    field: any;
    errors?: any;
    value?: any | any[];
    handleChange?: (e: SyntheticEvent) => void;
    handleRemove?: (name: string) => void;
};
declare const FormField: React.FC<FormFieldProps>;
export default FormField;
