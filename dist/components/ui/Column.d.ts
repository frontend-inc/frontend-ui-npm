import React from 'react';
type ColumnProps = {
    children: React.ReactNode;
    bgcolor?: string;
    py?: number;
    gap?: number;
    cols?: number;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
declare const Column: React.FC<ColumnProps>;
export default Column;
