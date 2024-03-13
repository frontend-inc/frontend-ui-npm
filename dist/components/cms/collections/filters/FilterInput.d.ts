import React from 'react';
type FilterInputProps = {
    children: React.ReactNode;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
};
declare const FilterInput: React.FC<FilterInputProps>;
export default FilterInput;
