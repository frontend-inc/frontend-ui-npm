import React from 'react';
import { OptionType } from '../../../types';
type FilterSortProps = {
    label: string;
    fieldOptions: OptionType[];
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const FilterSortInput: React.FC<FilterSortProps>;
export default FilterSortInput;
