import React from 'react';
import { Product } from 'frontend-shopify';
type ProductCarouselProps = {
    editing?: boolean;
    loading?: boolean;
    products: Product[];
    productComponent?: React.FC<any>;
    buttonText?: string;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductCarousel: React.FC<ProductCarouselProps>;
export default ProductCarousel;
