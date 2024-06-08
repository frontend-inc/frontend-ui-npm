import React from 'react';
import { FilterOptionType } from '../../../types';
type CheckboxDatesFutureFilterProps = {
    field: string;
    handleClick: (filter: FilterOptionType) => void;
    label?: string;
    values?: string[];
    disablePadding?: boolean;
};
declare const CheckboxDatesFutureFilter: React.FC<CheckboxDatesFutureFilterProps>;
export default CheckboxDatesFutureFilter;
