import React from 'react';
type ProductCollectionCarouselProps = {
    title?: string;
    editing?: boolean;
    handle: string | string[];
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
