import React from 'react';
type ProductRecommendationsProps = {
    handle?: string | string[];
    editing?: boolean;
    layout?: 'grid' | 'carousel';
    title?: string;
    perPage?: string;
    productComponent?: React.FC<any>;
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
