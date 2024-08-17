import React from 'react';
type AdminLayoutProps = {
    logo?: string;
    handleClick?: (item: any) => void;
    menuItems?: any[];
    secondaryActions?: React.ReactNode;
    children: React.ReactNode;
};
declare const AdminLayout: React.FC<AdminLayoutProps>;
export default AdminLayout;
