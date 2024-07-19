import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../..';
export type FilterButtonProps = {
    filters?: FilterOptionType[];
    loading?: boolean;
    filterOptions?: SearchFilterOptionType[];
    disableFilterCount?: boolean;
    handleFilter: (filter: FilterOptionType) => void;
    handleClear: () => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;
