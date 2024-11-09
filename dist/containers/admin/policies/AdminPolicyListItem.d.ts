import React from 'react';
type AdminPolicyListItemProps = {
    resource: any;
    enableBorder?: boolean;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminPolicyListItem: React.FC<AdminPolicyListItemProps>;
export default AdminPolicyListItem;
