import React from 'react';
import { CollectionListItemsProps } from './CollectionListItems';
export type GeoListListProps = CollectionListItemsProps & {
    url: string;
};
declare const GeoListItems: React.FC<GeoListListProps>;
export default GeoListItems;
