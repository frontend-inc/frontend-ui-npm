import React from 'react';
type ReviewItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminReviewItem: React.FC<ReviewItemProps>;
export default AdminReviewItem;
