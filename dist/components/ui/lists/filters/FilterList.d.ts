import React from 'react';
import { FilterOperator, FilterWhere, FilterOption, Option } from 'types';
type FilterListProps = {
    name?: string;
    where?: FilterWhere;
    operator?: FilterOperator;
    options?: Option[];
    values?: any;
    handleClick: (filter: FilterOption) => void;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
};
declare const FilterList: React.FC<FilterListProps>;
export default FilterList;
