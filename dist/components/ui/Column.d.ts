import React from 'react';
type ColumnProps = {
    children?: React.ReactNode;
    bgcolor?: string;
    py?: number | string;
    gap?: number;
    cols?: number;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null;
};
declare const Column: React.FC<ColumnProps>;
export default Column;
