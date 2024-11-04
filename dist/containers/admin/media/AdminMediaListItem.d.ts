import React from 'react';
type AdminMediaListItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminMediaListItem: React.FC<AdminMediaListItemProps>;
export default AdminMediaListItem;
