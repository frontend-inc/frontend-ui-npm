import React from 'react';
import { AdminMenusType, AdminMenuType } from '../../../types';
export type AdminPageProps = {
    title: string;
    actions?: React.ReactNode;
    activeTab: string;
    activeMenu: string;
    menuItems?: AdminMenusType;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: (menuItem: AdminMenuType) => void;
    handleDelete?: (menuItem: AdminMenuType) => void;
    disablePadding?: boolean;
    leftPanel?: React.FC;
    children: React.ReactNode;
};
declare const AdminPage: React.FC<AdminPageProps>;
export default AdminPage;
