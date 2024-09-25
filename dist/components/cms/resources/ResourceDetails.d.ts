import React from 'react';
import { DisplayFieldType } from '../../../types';
type ResourceDetailsProps = {
    avatar?: React.ReactNode;
    resource: any;
    primary: string;
    secondary?: string;
    label?: string;
    image?: string;
    fields: DisplayFieldType[];
    direction?: 'row' | 'column';
};
declare const ResourceDetails: React.FC<ResourceDetailsProps>;
export default ResourceDetails;
