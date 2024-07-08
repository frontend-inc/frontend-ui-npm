import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CollectionCarouselListProps = CollectionListProps & {
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const CollectionCarouselList: React.FC<CollectionCarouselListProps>;
export default CollectionCarouselList;
