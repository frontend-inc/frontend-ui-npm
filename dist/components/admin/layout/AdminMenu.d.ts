import React from 'react';
import { AdminMenusType } from '../../../types';
type AdminMenuItemsProps = {
    menuItems: AdminMenusType;
    activeMenu: string;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick: (menuItem: any) => void;
    handleEdit?: (menuItem: any) => void;
    handleDelete?: (menuItem: any) => void;
};
declare const AdminMenusItems: React.FC<AdminMenuItemsProps>;
export default AdminMenusItems;
