import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type ForeignProps = {
    resource: any;
};
export type ForeignCollectionProps = CollectionListProps & CollectionContainerProps & ForeignProps;
declare const ForeignCollection: React.FC<ForeignCollectionProps>;
export default ForeignCollection;
