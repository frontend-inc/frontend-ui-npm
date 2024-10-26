import React from 'react';
interface MenuProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
}
interface MenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
declare const Menu: React.FC<MenuProps>;
declare const MenuItem: React.FC<MenuItemProps>;
export { Menu, MenuItem };
