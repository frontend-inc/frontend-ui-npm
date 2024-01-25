import React from 'react';
import { Product } from 'frontend-shopify';
type ProductCardProps = {
    product: Product;
    handleClick?: () => void;
    buttonText?: string;
    height?: number;
    width?: number;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    enableOkendoStarRating?: boolean;
    buttonVariant?: 'contained' | 'outlined' | 'text';
};
declare const ProductCardVert: React.FC<ProductCardProps>;
export default ProductCardVert;
