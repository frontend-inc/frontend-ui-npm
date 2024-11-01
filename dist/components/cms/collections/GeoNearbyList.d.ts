import React from 'react';
import { CollectionListProps } from '../collections/CollectionList';
export type GeoNearbyListProps = CollectionListProps & {
    documentId: string;
};
declare const GeoNearbyList: React.FC<GeoNearbyListProps>;
export default GeoNearbyList;
