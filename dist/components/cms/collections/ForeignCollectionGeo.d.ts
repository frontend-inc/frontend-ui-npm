import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type ForeignProps = {
    resource: any;
};
export type ForeignCollectionGeoProps = CollectionListProps & CollectionContainerProps & ForeignProps;
declare const ForeignCollectionGeo: React.FC<ForeignCollectionGeoProps>;
export default ForeignCollectionGeo;
