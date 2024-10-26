import React from 'react';
import { SyntheticEventType } from '../../../../types';
type FilterInputProps = {
    filters: any[];
    fieldOptions: any[];
    handleChange: (e: SyntheticEventType, index: number) => void;
    handleRemove: (index: number) => void;
};
declare const FilterInputs: React.FC<FilterInputProps>;
export default FilterInputs;
