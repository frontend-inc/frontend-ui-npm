import React from 'react';
interface RowProps {
    size: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full';
    spacing?: number;
    children: React.ReactNode;
    className?: string;
}
declare const Row: React.FC<RowProps>;
export default Row;
