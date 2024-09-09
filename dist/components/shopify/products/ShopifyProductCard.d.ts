import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductCardProps = {
    product: ShopifyProductType;
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
declare const ShopifyProductCard: React.FC<ShopifyProductCardProps>;
export default ShopifyProductCard;
