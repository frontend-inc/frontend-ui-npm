import React from 'react';
type AdminMediaItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminMediaItem: React.FC<AdminMediaItemProps>;
export default AdminMediaItem;
