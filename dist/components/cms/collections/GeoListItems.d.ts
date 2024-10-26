import React from 'react';
import { CollectionListItemsProps } from './CollectionListItems';
export type GeoListListProps = CollectionListItemsProps & {
    url: string;
};
export default function GeoListItems({ url, displayFields, ...rest }: GeoListListProps): React.JSX.Element;
