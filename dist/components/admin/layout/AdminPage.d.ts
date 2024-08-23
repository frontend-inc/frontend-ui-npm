import React from 'react';
import { AdminMenusType } from '../../../types';
export type AdminPageProps = {
    title: string;
    actions?: React.ReactNode;
    activeTab: string;
    activeMenu: string;
    menuItems?: AdminMenusType;
    disablePadding?: boolean;
    children: React.ReactNode;
};
declare const AdminPage: React.FC<AdminPageProps>;
export default AdminPage;
