import React from 'react';
type MenuListItemProps = {
    selected?: boolean;
    title: string;
    description?: string;
    icon?: string;
    color?: string;
    enableBorder?: boolean;
    secondaryActions?: React.ReactNode;
    handleClick?: () => void;
    handleEdit?: null | ((item: any) => void);
    handleDelete?: null | ((item: any) => void);
};
declare const MenuListItem: React.FC<MenuListItemProps>;
export default MenuListItem;
