import React from 'react';
type ButtonMenuProps = {
    path: string;
    url: string;
    icon?: string;
    label: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};
declare const ButtonMenu: React.FC<ButtonMenuProps>;
export default ButtonMenu;
