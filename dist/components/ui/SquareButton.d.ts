import React from 'react';
type SquareButtonProps = {
    label: string;
    color?: string;
    icon: string;
    selected: boolean;
    handleClick?: () => void;
};
declare const SquareButton: React.FC<SquareButtonProps>;
export default SquareButton;
