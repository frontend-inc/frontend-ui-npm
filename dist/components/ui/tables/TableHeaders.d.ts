import React from "react";
type TableHeaderProps = {
    sortBy?: string;
    sortDirection?: string;
    fields: Array<any>;
    checked?: boolean;
    enableSelect?: boolean;
    enableEdit?: boolean;
    handleSort?: (e: any) => void;
    handleSelectAll?: (e: any) => void;
};
declare const TableHeaders: React.FC<TableHeaderProps>;
export default TableHeaders;
