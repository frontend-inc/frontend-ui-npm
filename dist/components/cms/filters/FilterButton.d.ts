import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../..';
type FilterGroupProps = {
    filters?: FilterOptionType[];
    filterOption: SearchFilterOptionType;
    handleFilter: (name: string, value: string | number | boolean) => void;
};
export declare const FilterGroup: React.FC<FilterGroupProps>;
export type FilterButtonProps = {
    filters?: FilterOptionType[];
    loading?: boolean;
    filterOptions?: SearchFilterOptionType[];
    handleFilter: (name: string, value: string | number | boolean) => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;
