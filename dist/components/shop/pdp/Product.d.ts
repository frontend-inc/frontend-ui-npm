import React from 'react';
import { ProductDetailsProps } from './ProductDetails';
export type ProductProps = ProductDetailsProps & {
    productId: string | number;
};
declare const Product: React.FC<ProductProps>;
export default Product;
