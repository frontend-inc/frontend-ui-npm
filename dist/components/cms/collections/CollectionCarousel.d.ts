import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
import { TableHeaderType } from '../../../types';
export type CollectionCarouselProps = CollectionListProps & CollectionContainerProps & {
    headers: TableHeaderType[];
};
declare const CollectionCarousel: React.FC<CollectionCarouselProps>;
export default CollectionCarousel;
