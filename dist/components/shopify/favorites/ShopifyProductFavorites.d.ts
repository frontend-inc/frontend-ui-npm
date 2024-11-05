import React from 'react';
import { UserType } from 'frontend-js';
export type ShopifyProductFavoritesProps = {
    user: UserType;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductFavorites: React.FC<ShopifyProductFavoritesProps>;
export default ShopifyProductFavorites;
