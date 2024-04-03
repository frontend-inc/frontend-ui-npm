import React from 'react';
import { FilterOperatorType, FilterWhereType, FilterOptionType } from '../../../../types';
type CheckboxPriceRangeFilterProps = {
    name: string;
    where?: FilterWhereType;
    operator?: FilterOperatorType;
    options?: {
        min: string | number;
        max: string | number;
    }[];
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
};
declare const CheckboxPriceRangeFilter: React.FC<CheckboxPriceRangeFilterProps>;
export default CheckboxPriceRangeFilter;
