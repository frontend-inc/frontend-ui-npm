import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCarouselProps = {
    loading?: boolean;
    products: ShopifyProductType[];
    buttonText?: string;
    enableAutoPlay?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductCarousel: React.FC<ShopifyProductCarouselProps>;
export default ShopifyProductCarousel;
