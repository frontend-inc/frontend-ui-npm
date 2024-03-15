import React from 'react';
type ProductFavoritesProps = {
    editing?: boolean;
    title?: string;
    perPage?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
    buttonText?: string;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const ProductFavorites: React.FC<ProductFavoritesProps>;
export default ProductFavorites;
