import React from 'react';
type ProductLikeButtonProps = {
    product: any;
    size?: 'small' | 'large';
    color?: string;
    numLikes?: number;
};
declare const ProductLikeButton: React.FC<ProductLikeButtonProps>;
export default ProductLikeButton;
