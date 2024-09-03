import React from 'react';
type AdminFieldItemProps = {
    url: string;
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
    handleReload: () => void;
};
declare const AdminFieldItem: React.FC<AdminFieldItemProps>;
export default AdminFieldItem;
