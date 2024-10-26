import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductFavoriteButtonProps = {
    product: ShopifyProductType;
    variant?: 'rounded' | 'circular';
    size?: 'small' | 'large';
};
declare const ShopifyProductFavoriteButton: React.FC<ShopifyProductFavoriteButtonProps>;
export default ShopifyProductFavoriteButton;
