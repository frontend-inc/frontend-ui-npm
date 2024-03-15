import React from 'react';
type ProductFavoritesCarouselProps = {
    editing?: boolean;
    title?: string;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
};
declare const ProductFavoritesCarousel: React.FC<ProductFavoritesCarouselProps>;
export default ProductFavoritesCarousel;
