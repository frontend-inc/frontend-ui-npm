import React from 'react';
type TableCellProps = {
    align?: 'center' | 'left' | 'right';
    children?: React.ReactNode;
    header?: boolean;
    sticky?: boolean;
};
declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
