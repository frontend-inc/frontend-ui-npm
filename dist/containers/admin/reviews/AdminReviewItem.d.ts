import React from 'react';
type AdminReviewItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminReviewItem: React.FC<AdminReviewItemProps>;
export default AdminReviewItem;
