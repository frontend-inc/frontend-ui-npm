import React from 'react';
type TableFilterButtonProps = {
    loading: boolean;
    query: any;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    badgeCount: number;
    handleClearFilters: () => void;
};
declare const TableFilterButton: React.FC<TableFilterButtonProps>;
export default TableFilterButton;
