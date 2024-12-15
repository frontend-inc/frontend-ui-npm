import React from 'react';
import { CoverProps } from '../../web/covers/Cover';
export type CollectionCoverCarouselListItemsProps = CoverProps & {
    href?: string;
    height?: number;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionCoverCarouselListItems: React.FC<CollectionCoverCarouselListItemsProps>;
export default CollectionCoverCarouselListItems;
