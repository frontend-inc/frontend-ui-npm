import React from 'react';
import { FilterOption, SyntheticEvent } from 'types';
type FieldOption = FilterOption & {
    db_type: string;
};
type FilterFieldProps = {
    index: number;
    filter: FilterOption;
    fieldOptions: FieldOption[];
    handleChange: (e: SyntheticEvent, index: number) => void;
    handleRemove: (index: number) => void;
};
declare const FilterFieldWrapper: React.FC<FilterFieldProps>;
export default FilterFieldWrapper;
