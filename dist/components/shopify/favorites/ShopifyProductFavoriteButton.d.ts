import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductFavoriteButtonProps = {
    product: ShopifyProductType;
    variant?: 'rounded' | 'circular';
    size?: 'sm' | 'md' | 'lg';
};
declare const ShopifyProductFavoriteButton: React.FC<ShopifyProductFavoriteButtonProps>;
export default ShopifyProductFavoriteButton;
