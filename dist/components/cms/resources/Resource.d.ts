import React from 'react';
import { DisplayFieldType } from '../../../types';
export type ResourceProps = {
    avatar?: React.ReactNode;
    icon?: string;
    color?: string;
    title?: string | React.ReactNode;
    description?: string;
    image?: string;
    resource: any;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    secondaryActions?: React.ReactNode;
    menuActions?: any;
    displayFields: DisplayFieldType[];
};
declare const Resource: React.FC<ResourceProps>;
export default Resource;
