import React from 'react';
import { FilterOptionType } from '../../../types';
type CheckboxNumberRangeFilterProps = {
    field: string;
    options?: {
        label: string;
        min: string | number;
        max: string | number;
    }[];
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label?: string;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const CheckboxNumberRangeFilter: React.FC<CheckboxNumberRangeFilterProps>;
export default CheckboxNumberRangeFilter;
