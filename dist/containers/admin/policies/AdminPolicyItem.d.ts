import React from 'react';
type AdminPolicyItemProps = {
    resource: any;
    enableBorder?: boolean;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminPolicyItem: React.FC<AdminPolicyItemProps>;
export default AdminPolicyItem;
