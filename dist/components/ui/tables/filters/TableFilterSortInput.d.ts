import React from 'react';
import { OptionType } from '../../../../types';
type TableFilterSortProps = {
    label: string;
    fieldOptions: OptionType[];
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const TableFilterSortInput: React.FC<TableFilterSortProps>;
export default TableFilterSortInput;
