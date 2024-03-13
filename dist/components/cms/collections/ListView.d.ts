import React from 'react';
type ListViewProps = {
    loading?: boolean;
    editing?: boolean;
    items: any;
    handleClick?: (item: any) => void;
    flexDirection?: 'row' | 'column';
    component?: any;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    spacing?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
};
declare const ListView: React.FC<ListViewProps>;
export default ListView;
