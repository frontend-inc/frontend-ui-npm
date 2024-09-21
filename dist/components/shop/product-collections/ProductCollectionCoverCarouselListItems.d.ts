import React from 'react';
import { CoverProps } from '../../web/covers/Cover';
export type ProductCollectionCoverCarouselListItemsProps = CoverProps & {
    href?: string;
    height?: number;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ProductCollectionCoverCarouselListItems: React.FC<ProductCollectionCoverCarouselListItemsProps>;
export default ProductCollectionCoverCarouselListItems;
