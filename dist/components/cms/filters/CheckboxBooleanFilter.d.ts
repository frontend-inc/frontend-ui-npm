import React from 'react';
import { FilterOptionType, OptionType } from '../../../types';
type CheckboxFilterProps = {
    field: string;
    options?: OptionType[];
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label: string;
};
declare const CheckboxFilter: React.FC<CheckboxFilterProps>;
export default CheckboxFilter;
