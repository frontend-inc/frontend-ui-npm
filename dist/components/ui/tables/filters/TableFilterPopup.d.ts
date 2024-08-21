import React from 'react';
type TableFilterPopupProps = {
    open: boolean;
    loading: boolean;
    anchorEl: any;
    query: any;
    handleClose: () => void;
    fields: any[];
    handleSearch: (keywords: any) => void;
    handleChange: (e: any) => void;
    handleClearFilters: () => void;
};
declare const TableFilterPopup: React.FC<TableFilterPopupProps>;
export default TableFilterPopup;
