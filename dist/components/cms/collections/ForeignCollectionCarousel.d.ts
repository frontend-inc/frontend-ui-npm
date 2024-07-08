import React from 'react';
import { CollectionListProps } from './CollectionList';
import { ForeignCollectionContainerProps } from './ForeignCollectionContainer';
export type ForeignCollectionCarouselProps = CollectionListProps & ForeignCollectionContainerProps;
declare const ForeignCollectionCarousel: React.FC<ForeignCollectionCarouselProps>;
export default ForeignCollectionCarousel;
