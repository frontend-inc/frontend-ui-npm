import React from 'react';
type AdminContactItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminContactItem: React.FC<AdminContactItemProps>;
export default AdminContactItem;
