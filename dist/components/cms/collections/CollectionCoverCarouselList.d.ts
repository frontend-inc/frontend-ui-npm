import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CollectionCoverCarouselListProps = CollectionListProps & {
    enableArrows?: boolean;
    enableAutoPlay?: boolean;
    buttonText?: string;
    height?: number;
};
declare const CollectionCoverCarouselList: React.FC<CollectionCoverCarouselListProps>;
export default CollectionCoverCarouselList;
