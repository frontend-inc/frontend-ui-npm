import React from 'react';
type TableCellProps = {
    align?: 'center' | 'left' | 'right';
    children?: React.ReactNode;
    header?: boolean;
    sticky?: boolean;
    small?: boolean;
    variant?: 'head' | 'body';
};
declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
