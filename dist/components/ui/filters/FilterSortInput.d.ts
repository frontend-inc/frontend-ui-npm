import React from 'react';
import { Option } from '../../../types';
type FilterSortProps = {
    label: string;
    fieldOptions: Option[];
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const FilterSortInput: React.FC<FilterSortProps>;
export default FilterSortInput;
