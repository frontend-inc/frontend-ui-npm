import React from 'react';
import { ProductListProps } from '../products/ProductList';
export type CollectionProductsCarouselProps = ProductListProps & {
    productCollectionId: string;
    enableArrows?: boolean;
    enableAutoplay?: boolean;
};
declare const CollectionProductsCarousel: React.FC<CollectionProductsCarouselProps>;
export default CollectionProductsCarousel;
