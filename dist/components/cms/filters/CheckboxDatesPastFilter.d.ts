import React from 'react';
import { FilterOptionType } from '../../../types';
type CheckboxDatesPastFilterProps = {
    field: string;
    handleClick: (filter: FilterOptionType) => void;
    label: string;
    values?: string[];
    disablePadding?: boolean;
};
declare const CheckboxDatesPastFilter: React.FC<CheckboxDatesPastFilterProps>;
export default CheckboxDatesPastFilter;
