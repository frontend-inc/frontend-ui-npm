import React from 'react';
import { DocumentListItemsProps } from './DocumentListItems';
export type PlacesListListProps = DocumentListItemsProps & {
    url: string;
};
export default function PlacesListItems({ url, metafields, ...rest }: PlacesListListProps): React.JSX.Element;
