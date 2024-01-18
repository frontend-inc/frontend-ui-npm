import React from 'react';
type ButtonIconProps = {
    icon: any;
    onClick: () => void;
    size?: number;
    disabled?: boolean;
};
declare const ButtonIcon: React.FC<ButtonIconProps>;
export default ButtonIcon;
