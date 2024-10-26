import React from 'react';
import { FilterOperatorType, FilterWhereType, FilterOptionType, OptionType } from '../../../types';
type CheckboxFilterProps = {
    field: string;
    where?: FilterWhereType;
    operator?: FilterOperatorType;
    options?: OptionType[];
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label: string;
    icon?: React.ReactNode;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const CheckboxFilter: React.FC<CheckboxFilterProps>;
export default CheckboxFilter;
