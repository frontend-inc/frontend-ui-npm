import React from 'react';
type AdminTeamItemProps = {
    resource: any;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const AdminTeamItem: React.FC<AdminTeamItemProps>;
export default AdminTeamItem;
