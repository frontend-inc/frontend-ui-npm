import React from 'react';
export type ResourceProps = {
    avatar?: React.ReactNode;
    icon?: string;
    color?: string;
    title?: string;
    description?: string;
    image?: string;
    resource: any;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    secondaryActions?: React.ReactNode;
    menuActions?: any;
};
declare const Resource: React.FC<ResourceProps>;
export default Resource;
