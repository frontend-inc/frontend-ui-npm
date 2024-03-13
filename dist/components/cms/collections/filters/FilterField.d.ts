import React from 'react';
import { FilterOptionType } from '../../../../types';
type FilterButtonProps = {
    field?: any;
    filters?: FilterOptionType[];
    handleFilter: (filter: FilterOptionType) => void;
};
declare const FilterField: React.FC<FilterButtonProps>;
export default FilterField;
