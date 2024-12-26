import React from 'react';
type ButtonMenuProps = {
    path?: string;
    url?: string;
    icon?: string;
    label: string;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const ButtonMenu: React.FC<ButtonMenuProps>;
export default ButtonMenu;
