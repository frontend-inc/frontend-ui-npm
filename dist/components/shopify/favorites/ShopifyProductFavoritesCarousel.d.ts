import React from 'react';
type ShopifyProductFavoritesCarouselProps = {
    href: string;
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
declare const ShopifyProductFavoritesCarousel: React.FC<ShopifyProductFavoritesCarouselProps>;
export default ShopifyProductFavoritesCarousel;
