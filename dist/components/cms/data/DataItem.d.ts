import React from 'react';
type DataItemProps = {
    sortable?: boolean;
    resource: any;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    handleEdit?: () => void;
    handleDelete?: () => void;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const DataItem: React.FC<DataItemProps>;
export default DataItem;
