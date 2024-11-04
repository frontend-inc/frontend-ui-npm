import React from 'react';
import { MetafieldType } from '../../../types';
type CollectionHeroProps = {
    resource: any;
    primary?: string;
    secondary?: string;
    hero?: React.ReactNode;
    actions?: React.ReactNode;
    label?: string;
    image?: string;
    metafields?: MetafieldType[];
};
declare const CollectionDetails: React.FC<CollectionHeroProps>;
export default CollectionDetails;
