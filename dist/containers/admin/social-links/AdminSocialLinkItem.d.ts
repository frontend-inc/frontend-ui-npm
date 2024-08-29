import React from 'react';
type AdminSocialLinkItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminSocialLinkItem: React.FC<AdminSocialLinkItemProps>;
export default AdminSocialLinkItem;
