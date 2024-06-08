import React from 'react';
import { CollectionListProps } from './CollectionList';
export type ForeignCollectionProps = CollectionListProps & {
    resource: any;
    url: string;
    foreignUrl: string;
    foreignContentType?: string;
};
declare const ForeignCollection: React.FC<ForeignCollectionProps>;
export default ForeignCollection;
