import React from 'react';
import { MetafieldType } from '../../../types';
type ResourceDetailsProps = {
    disableImage?: boolean;
    actions?: React.ReactNode;
    resource: any;
    title?: string;
    subtitle?: string;
    label?: string;
    image?: string;
    height?: number;
    fields: MetafieldType[];
    direction?: 'row' | 'column';
};
declare const ResourceDetails: React.FC<ResourceDetailsProps>;
export default ResourceDetails;
