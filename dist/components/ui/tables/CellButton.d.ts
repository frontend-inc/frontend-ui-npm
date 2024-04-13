import React from 'react';
type CellButtonProps = {
    children: string;
    icon: string;
    handleClick?: (value: any, row?: any, field?: any) => void;
};
declare const CellButton: React.FC<CellButtonProps>;
export default CellButton;
