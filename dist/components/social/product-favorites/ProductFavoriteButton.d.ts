import React from 'react';
type ProductFavoriteButtonProps = {
    product: any;
    size?: 'small' | 'large';
    color?: string;
    numFavorites?: number;
};
declare const ProductFavoriteButton: React.FC<ProductFavoriteButtonProps>;
export default ProductFavoriteButton;
