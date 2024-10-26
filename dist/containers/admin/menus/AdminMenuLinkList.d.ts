import React from 'react';
import { AdminMenuType } from '../../../types';
type AdminMenuListProps = {
    menuId: number;
    handleClick: (menu: AdminMenuType) => void;
};
declare const AdminMenuLinkList: React.FC<AdminMenuListProps>;
export default AdminMenuLinkList;
