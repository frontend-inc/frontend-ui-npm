import React from 'react';
type AdminZapItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminZapItem: React.FC<AdminZapItemProps>;
export default AdminZapItem;
