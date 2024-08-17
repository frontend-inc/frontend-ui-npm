import React from 'react';
type ActionItemProps = {
    resource: any;
    sortable?: boolean;
    handleClick: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
};
declare const ActionItem: React.FC<ActionItemProps>;
export default ActionItem;
