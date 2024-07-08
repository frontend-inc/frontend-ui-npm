import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type CollectionGeoProps = CollectionListProps & CollectionContainerProps;
declare const CollectionGeo: React.FC<CollectionGeoProps>;
export default CollectionGeo;
