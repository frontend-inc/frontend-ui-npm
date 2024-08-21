import React from 'react';
type TableFilterFormProps = {
    loading: boolean;
    query: any;
    fields: any[];
    handleChange: (e: any) => void;
    handleSearch: (e: any) => void;
    handleClearFilters: () => void;
};
declare const TableFilterForm: React.FC<TableFilterFormProps>;
export default TableFilterForm;
