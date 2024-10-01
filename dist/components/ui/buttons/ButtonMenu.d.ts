import React from 'react';
type ButtonMenuProps = {
    path: string;
    url: string;
    icon?: string;
    label: string;
    onClick?: (ev: any) => void;
};
declare const ButtonMenu: React.FC<ButtonMenuProps>;
export default ButtonMenu;
