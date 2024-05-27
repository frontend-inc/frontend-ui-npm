import React from 'react';
type MenuListProps = {
    children: React.ReactNode;
    id?: string;
    label?: string;
    icon?: React.ReactNode;
    disableBorder?: boolean;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const MenuList: React.FC<MenuListProps>;
export default MenuList;
