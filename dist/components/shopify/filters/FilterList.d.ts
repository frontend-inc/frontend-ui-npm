import React from 'react';
import { TypographyVariantsType } from '../../../types';
type FilterListProps = {
    expandable?: boolean;
    label?: string;
    count?: number;
    icon?: React.ReactNode;
    children: any;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
    variant?: TypographyVariantsType;
};
declare const FilterList: React.FC<FilterListProps>;
export default FilterList;
