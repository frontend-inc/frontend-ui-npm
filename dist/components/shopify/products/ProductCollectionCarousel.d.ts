import React from 'react';
export type ProductCollectionCarouselProps = {
    href: string;
    handle: string;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductCollectionCarousel: React.FC<ProductCollectionCarouselProps>;
export default ProductCollectionCarousel;
