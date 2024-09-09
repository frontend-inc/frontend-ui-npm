import React from 'react';
import { ProductCardProps } from './ProductCard';
export type ProductListCardProps = ProductCardProps & {
    circular?: boolean;
    disableImage?: boolean;
};
declare const ProductListCard: React.FC<ProductListCardProps>;
export default ProductListCard;
