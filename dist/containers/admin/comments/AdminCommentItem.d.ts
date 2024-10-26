import React from 'react';
type AdminCommentItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminCommentItem: React.FC<AdminCommentItemProps>;
export default AdminCommentItem;
