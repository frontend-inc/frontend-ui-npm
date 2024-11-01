import React from 'react';
export type ShopifyProductRecommendationsProps = {
    handle?: string;
    layout?: 'grid' | 'carousel';
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
};
declare const ShopifyProductRecommendations: React.FC<ShopifyProductRecommendationsProps>;
export default ShopifyProductRecommendations;
