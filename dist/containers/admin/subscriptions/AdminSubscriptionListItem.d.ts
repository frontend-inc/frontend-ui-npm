import React from 'react';
type AdminSubscriptionListItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminSubscriptionListItem: React.FC<AdminSubscriptionListItemProps>;
export default AdminSubscriptionListItem;
