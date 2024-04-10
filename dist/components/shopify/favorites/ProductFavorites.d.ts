import React from 'react';
export type ProductFavoritesProps = {
    editing?: boolean;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
};
declare const ProductFavorites: React.FC<ProductFavoritesProps>;
export default ProductFavorites;
