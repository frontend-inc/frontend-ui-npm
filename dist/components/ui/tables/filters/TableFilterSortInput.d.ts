import React from 'react';
type TableFilterSortProps = {
    label: string;
    fieldOptions: {
        label: string;
        value: string;
    }[];
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const TableFilterSortInput: React.FC<TableFilterSortProps>;
export default TableFilterSortInput;
