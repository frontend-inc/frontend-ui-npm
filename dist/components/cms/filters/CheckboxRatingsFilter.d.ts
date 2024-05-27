import React from 'react';
import { FilterOperatorType, FilterWhereType, FilterOptionType } from '../../../types';
type CheckboxFilterProps = {
    name: string;
    where?: FilterWhereType;
    operator?: FilterOperatorType;
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label?: string;
    icon?: React.ReactNode;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const CheckboxFilter: React.FC<CheckboxFilterProps>;
export default CheckboxFilter;
