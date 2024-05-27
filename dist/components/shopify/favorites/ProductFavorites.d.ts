import React from 'react';
export type ProductFavoritesProps = {
    href: string;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
};
declare const ProductFavorites: React.FC<ProductFavoritesProps>;
export default ProductFavorites;
