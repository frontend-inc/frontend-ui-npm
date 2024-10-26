import React from 'react';
type ProductRatingProps = {
    resource: any;
    enableTotal?: boolean;
    size?: 'small' | 'medium' | 'large';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
};
declare const ProductRating: React.FC<ProductRatingProps>;
export default ProductRating;
