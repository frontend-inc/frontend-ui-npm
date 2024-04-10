import React from 'react';
export type ProductRecommendationsProps = {
    handle?: string | string[];
    editing?: boolean;
    layout?: 'grid' | 'carousel';
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    enableOkendoStarRating?: boolean;
    buttonText?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
};
declare const ProductRecommendations: React.FC<ProductRecommendationsProps>;
export default ProductRecommendations;
