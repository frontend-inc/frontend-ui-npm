import React from 'react';
type AdminReviewListItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminReviewListItem: React.FC<AdminReviewListItemProps>;
export default AdminReviewListItem;
