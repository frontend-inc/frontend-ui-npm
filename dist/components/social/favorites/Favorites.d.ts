import React from 'react';
import { CollectionListProps } from '../../cms/collections/CollectionList';
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer';
export type FavoritesProps = CollectionListProps & CollectionContainerProps;
declare const Favorites: React.FC<FavoritesProps>;
export default Favorites;
