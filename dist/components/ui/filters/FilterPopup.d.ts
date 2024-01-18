import React from 'react';
type FilterPopupProps = {
    open: boolean;
    anchorEl: any;
    query: any;
    handleClose: () => void;
    fields: any[];
    handleSearch: (keywords: any) => void;
    handleChange: (e: any) => void;
    handleClearFilters: () => void;
};
declare const FilterPopup: React.FC<FilterPopupProps>;
export default FilterPopup;
