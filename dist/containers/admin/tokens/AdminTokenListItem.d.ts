import React from 'react';
type AdminTokenListItemProps = {
    resource: any;
    handleEdit: (token: any) => void;
    handleDelete: (token: any) => void;
};
declare const AdminTokenListItem: React.FC<AdminTokenListItemProps>;
export default AdminTokenListItem;
