import React from 'react';
type MenuButtonProps = {
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    className?: string;
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
