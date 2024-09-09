import React from 'react';
type AdminMetafieldItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminMetafieldItem: React.FC<AdminMetafieldItemProps>;
export default AdminMetafieldItem;
