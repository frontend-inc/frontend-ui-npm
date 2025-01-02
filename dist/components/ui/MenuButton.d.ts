import React from 'react';
type MenuButtonProps = {
    handleEdit?: ((item: any) => void);
    handleDelete?: ((item: any) => void);
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
