import React from 'react';
type DataListItemProps = {
    label?: string;
    primary: string;
    secondary?: string;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    image?: string;
    height?: number;
    handleClick?: () => void;
    handleEdit?: () => void;
    handleDelete?: () => void;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const DataListItem: React.FC<DataListItemProps>;
export default DataListItem;
