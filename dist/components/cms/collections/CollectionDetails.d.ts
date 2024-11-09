import React from 'react';
import { MetafieldType } from '../../../types';
type CollectionHeroProps = {
    resource: any;
    actions?: React.ReactNode;
    metafields?: MetafieldType[];
};
declare const CollectionDetails: React.FC<CollectionHeroProps>;
export default CollectionDetails;
