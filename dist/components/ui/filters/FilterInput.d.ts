import React from 'react';
import { FilterOptionType, SyntheticEventType } from '../../../types';
type FieldOption = FilterOptionType & {
    db_type: string;
};
type FilterFieldProps = {
    index: number;
    filter: FilterOptionType;
    fieldOptions: FieldOption[];
    handleChange: (e: SyntheticEventType, index: number) => void;
    handleRemove: (index: number) => void;
};
declare const FilterFieldWrapper: React.FC<FilterFieldProps>;
export default FilterFieldWrapper;
