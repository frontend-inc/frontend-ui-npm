import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type CollectionGeoNearbyProps = CollectionListProps & CollectionContainerProps & {
    resource: any;
};
declare const CollectionGeoNearby: React.FC<CollectionGeoNearbyProps>;
export default CollectionGeoNearby;
