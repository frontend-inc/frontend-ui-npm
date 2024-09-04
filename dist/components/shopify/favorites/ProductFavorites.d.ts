import React from 'react';
import { UserType } from 'frontend-js';
export type ProductFavoritesProps = {
    href: string;
    user: UserType;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
};
declare const ProductFavorites: React.FC<ProductFavoritesProps>;
export default ProductFavorites;
