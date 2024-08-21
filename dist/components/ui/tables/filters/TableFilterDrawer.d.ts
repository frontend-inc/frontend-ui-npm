import React from 'react';
type TableFilterDrawerProps = {
    open: boolean;
    loading: boolean;
    query: any;
    handleClose: () => void;
    fields: any[];
    handleSearch: (keywords: any) => void;
    handleChange: (e: any) => void;
    handleClearFilters: () => void;
};
declare const TableFilterDrawer: React.FC<TableFilterDrawerProps>;
export default TableFilterDrawer;
