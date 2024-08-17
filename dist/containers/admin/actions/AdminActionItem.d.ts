import React from 'react';
type AdminActionItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminActionItem: React.FC<AdminActionItemProps>;
export default AdminActionItem;
