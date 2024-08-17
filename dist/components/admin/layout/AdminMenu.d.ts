import React from 'react';
import { AdminMenusType } from '../../../types';
type AdminMenuItemsProps = {
    menuItems: AdminMenusType;
    activeMenu: string;
    handleClick: (menuItem: any) => void;
};
declare const AdminMenusItems: React.FC<AdminMenuItemsProps>;
export default AdminMenusItems;
