import React from 'react';
export type ShopifyProductCollectionCarouselProps = {
    handle: string;
    enableAutoPlay?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductCollectionCarousel: React.FC<ShopifyProductCollectionCarouselProps>;
export default ShopifyProductCollectionCarousel;
