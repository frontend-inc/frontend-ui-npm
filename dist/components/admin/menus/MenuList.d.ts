import React from 'react';
type MenuListProps = {
    children: React.ReactNode;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const MenuList: React.FC<MenuListProps>;
export default MenuList;
