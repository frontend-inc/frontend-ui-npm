import React from 'react';
type FilterWrapperProps = {
    children: React.ReactNode;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
};
declare const FilterWrapper: React.FC<FilterWrapperProps>;
export default FilterWrapper;
