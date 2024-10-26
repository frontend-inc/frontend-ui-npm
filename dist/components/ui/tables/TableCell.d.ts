import React from 'react';
type TableCellProps = {
    children?: React.ReactNode;
    header?: boolean;
    sticky?: boolean;
    small?: boolean;
    variant?: 'head' | 'body';
};
export default function CustomTableCell({ children, header, sticky, small, variant, }: TableCellProps): React.JSX.Element;
export {};
