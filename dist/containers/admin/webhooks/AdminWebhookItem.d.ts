import React from 'react';
type AdminWebhookItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminWebhookItem: React.FC<AdminWebhookItemProps>;
export default AdminWebhookItem;
