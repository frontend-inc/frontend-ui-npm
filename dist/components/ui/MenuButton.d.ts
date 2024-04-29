import React from 'react';
type MenuButtonProps = {
    children?: React.ReactNode;
    icon?: string;
    color?: string;
    enableIcons?: boolean;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
