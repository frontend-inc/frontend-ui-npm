import React from 'react';
import { MetafieldType } from '../../../types';
type ResourceDetailsProps = {
    hero?: React.ReactNode;
    actions?: React.ReactNode;
    resource: any;
    primary: string;
    secondary?: string;
    label?: string;
    image: string;
    fields: MetafieldType[];
    direction?: 'row' | 'column';
};
declare const ResourceDetails: React.FC<ResourceDetailsProps>;
export default ResourceDetails;
