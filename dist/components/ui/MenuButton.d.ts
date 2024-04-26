import React from 'react';
type MenuButtonProps = {
    children: React.ReactNode;
    icon?: 'string';
    size?: 'small' | 'medium';
    selected?: boolean;
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
