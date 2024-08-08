import React from 'react';
type MenuItemProps = {
    label: string;
    handleClick: () => void;
    active?: boolean;
    depth?: number;
    icon?: React.ReactNode;
};
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
