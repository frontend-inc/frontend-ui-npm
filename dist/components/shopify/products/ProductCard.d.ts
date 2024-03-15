import React from 'react';
import { ProductType } from 'frontend-shopify';
type ProductCardProps = {
    product: ProductType;
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
declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
