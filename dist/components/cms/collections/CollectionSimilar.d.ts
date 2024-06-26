import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CollectionSimilarProps = CollectionListProps & {
    resource: any;
};
declare const CollectionSimilar: React.FC<CollectionSimilarProps>;
export default CollectionSimilar;
