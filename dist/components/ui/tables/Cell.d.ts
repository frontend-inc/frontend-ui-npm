import React from 'react';
type CellProps = {
    field: any;
    row: any;
    value: any;
    handleClick?: (value: any, row: any, field: any) => void;
};
declare const Cell: React.FC<CellProps>;
export default Cell;
