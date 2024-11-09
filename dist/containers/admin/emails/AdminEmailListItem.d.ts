import React from 'react';
type AdminEmailListItemProps = {
    resource: any;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
};
declare const AdminEmailListItem: React.FC<AdminEmailListItemProps>;
export default AdminEmailListItem;
