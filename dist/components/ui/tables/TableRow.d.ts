import React from 'react';
type TableRowProps = {
    row: any;
    fields: Array<any>;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableShow?: boolean;
    enableSelect?: boolean;
    selectedIds?: Array<any>;
    handleClick?: (value: any, row: any, field: any) => void;
    handleShow?: (resource: any) => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    handleSelect?: (item: any) => void;
};
declare const TableRow: React.FC<TableRowProps>;
export default TableRow;
