import React from 'react';
import { CoverProps } from '../../../components/web/covers/Cover';
export type ProductCollectionCarouselCoverListItemsProps = CoverProps & {
    href?: string;
    height?: number;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ProductCollectionCarouselCoverListItems: React.FC<ProductCollectionCarouselCoverListItemsProps>;
export default ProductCollectionCarouselCoverListItems;
