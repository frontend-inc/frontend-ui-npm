import React from 'react';
export type ShopifyProductCollectionCarouselProps = {
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
declare const ShopifyProductCollectionCarousel: React.FC<ShopifyProductCollectionCarouselProps>;
export default ShopifyProductCollectionCarousel;
