import React from "react";
type MultiAutosuggestProps = {
    value: any[];
    options: any[];
    label: string;
    name: string;
    placeholder?: string;
    handleChange: (event: any) => void;
    handleInputChange: (event: any) => void;
};
declare const MultiAutosuggest: React.FC<MultiAutosuggestProps>;
export default MultiAutosuggest;
