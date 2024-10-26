import React from 'react';
import { FilterOptionType, SyntheticEventType } from '../../../../types';
type FilterFieldProps = {
    index: number;
    filter: FilterOptionType;
    fieldOptions: {
        label: string;
        value: string;
    }[];
    handleChange: (e: SyntheticEventType, index: number) => void;
    handleRemove: (index: number) => void;
};
declare const FilterFieldWrapper: React.FC<FilterFieldProps>;
export default FilterFieldWrapper;
