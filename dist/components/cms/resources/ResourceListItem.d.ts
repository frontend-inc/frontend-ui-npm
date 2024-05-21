import React from 'react';
export type ResourceListItemProps = {
    resource?: any;
    title?: string;
    description?: string;
    avatar?: any;
    icon?: string;
    image?: string;
    color?: string;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    secondaryActions?: React.ReactNode;
    menuActions?: any;
};
declare const ResourceListItem: React.FC<ResourceListItemProps>;
export default ResourceListItem;
