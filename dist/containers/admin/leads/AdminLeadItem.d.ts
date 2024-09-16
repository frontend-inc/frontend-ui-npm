import React from 'react';
type AdminLeadItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminLeadItem: React.FC<AdminLeadItemProps>;
export default AdminLeadItem;
