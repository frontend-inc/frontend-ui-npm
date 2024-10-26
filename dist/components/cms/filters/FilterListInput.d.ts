import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../../types';
type FilterListInputProps = {
    filters: FilterOptionType[];
    filterOption: SearchFilterOptionType;
    handleFilter: (filter: FilterOptionType) => void;
};
declare const FilterListInput: React.FC<FilterListInputProps>;
export default FilterListInput;
