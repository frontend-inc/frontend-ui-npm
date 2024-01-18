import React from 'react';
type GridViewProps = {
    loading?: boolean;
    items: any[];
    editing?: boolean;
    buttonText?: string;
    handleClick?: (item: any) => void;
    component?: any;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const GridView: React.FC<GridViewProps>;
export default GridView;
