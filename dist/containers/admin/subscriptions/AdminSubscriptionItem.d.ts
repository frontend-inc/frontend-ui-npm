import React from 'react';
type AdminSubscriptionItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminSubscriptionItem: React.FC<AdminSubscriptionItemProps>;
export default AdminSubscriptionItem;
