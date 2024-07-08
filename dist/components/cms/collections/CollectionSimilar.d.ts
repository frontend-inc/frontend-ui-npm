import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type CollectionSimilarProps = CollectionListProps & CollectionContainerProps & {
    resource: any;
};
declare const CollectionSimilar: React.FC<CollectionSimilarProps>;
export default CollectionSimilar;
