import React from 'react';
export type ResourceProps = {
    resource: any;
    avatar?: React.ReactNode;
    icon?: string;
    color?: string;
    layout?: 'list' | 'grid';
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    secondaryActions?: React.ReactNode;
    menuActions?: any;
    sortable?: boolean;
    isDragging?: boolean;
    enableBorder?: boolean;
};
declare const Resource: React.FC<ResourceProps>;
export default Resource;
