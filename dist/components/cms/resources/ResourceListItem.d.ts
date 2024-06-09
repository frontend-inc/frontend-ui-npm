import React from 'react';
import { DisplayFieldType } from '../../../types';
export type ResourceListItemProps = {
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
    displayFields?: DisplayFieldType[];
};
declare const ResourceListItem: React.FC<ResourceListItemProps>;
export default ResourceListItem;
