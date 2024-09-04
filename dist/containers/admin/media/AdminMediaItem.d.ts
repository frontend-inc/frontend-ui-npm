import React from 'react';
type AdminMetafieldItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminMediaItem: React.FC<AdminMetafieldItemProps>;
export default AdminMediaItem;
