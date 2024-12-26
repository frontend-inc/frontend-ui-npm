import React from 'react';
type MenuButtonProps = {
    children?: React.ReactNode;
    handleEdit?: false | ((item: any) => void);
    handleDelete?: false | ((item: any) => void);
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
