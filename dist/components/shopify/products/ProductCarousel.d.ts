import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductCarouselProps = {
    editing?: boolean;
    loading?: boolean;
    products: ProductType[];
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
declare const ProductCarousel: React.FC<ProductCarouselProps>;
export default ProductCarousel;
