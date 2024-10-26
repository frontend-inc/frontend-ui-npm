import React from 'react';
import { AdminMenusType } from '../../../types';
type AdminMenuProps = {
    menuItems: AdminMenusType;
    activeMenu: string;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick: (menuItem: any) => void;
    handleEdit?: (menuItem: any) => void;
    handleDelete?: (menuItem: any) => void;
};
declare const AdminMenu: React.FC<AdminMenuProps>;
export default AdminMenu;
