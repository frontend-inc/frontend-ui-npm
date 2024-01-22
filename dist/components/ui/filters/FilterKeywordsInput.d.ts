import React from "react";
type FilterKeywordProps = {
    label?: string;
    handleSearch: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};
declare const FilterKeywordsInput: React.FC<FilterKeywordProps>;
export default FilterKeywordsInput;
