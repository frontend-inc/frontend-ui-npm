import React from 'react';
import { FilterOptionType } from '../../../..';
type FilterButtonProps = {
    filters?: FilterOptionType[];
    loading?: boolean;
    fields?: any;
    handleFilter: (filter: FilterOptionType) => void;
    handleClear: () => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;
