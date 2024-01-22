import React from "react";
import { SyntheticEvent } from "../../types";
type AutosuggestProps = {
    errors?: any;
    value?: any;
    direction?: "row" | "column";
    options: any[];
    label?: string;
    name: string;
    placeholder?: string;
    multiselect?: boolean;
    handleChange: (e: SyntheticEvent) => void;
    handleInputChange?: (value: string) => void;
    freeSolo?: boolean;
};
declare const Autosuggest: React.FC<AutosuggestProps>;
export default Autosuggest;
