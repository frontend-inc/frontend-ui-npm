import React from 'react';
export type ShopifyProductRecommendationsProps = {
    shopifyProduct: string;
    layout?: 'grid' | 'carousel';
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
};
declare const ShopifyProductRecommendations: React.FC<ShopifyProductRecommendationsProps>;
export default ShopifyProductRecommendations;
