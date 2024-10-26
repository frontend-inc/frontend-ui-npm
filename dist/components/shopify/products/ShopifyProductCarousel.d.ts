import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCarouselProps = {
    href: string;
    loading?: boolean;
    products: ShopifyProductType[];
    buttonText?: string;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableDots?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ShopifyProductCarousel: React.FC<ShopifyProductCarouselProps>;
export default ShopifyProductCarousel;
