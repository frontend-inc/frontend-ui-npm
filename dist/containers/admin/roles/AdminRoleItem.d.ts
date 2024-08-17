import React from 'react';
type AdminRoleItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminRoleItem: React.FC<AdminRoleItemProps>;
export default AdminRoleItem;
