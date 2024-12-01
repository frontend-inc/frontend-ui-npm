import React from 'react';
export type GridProps = {
    md?: number;
    sm?: number;
    lg?: number;
    xl?: number;
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
    className?: string;
    children: React.ReactNode;
};
declare const Grid: React.FC<GridProps>;
export default Grid;
