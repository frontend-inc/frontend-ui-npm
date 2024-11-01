import React from 'react';
import { ProductListProps } from '../products/ProductList';
export type ProductSimilarListProps = ProductListProps & {
    productId: string | number;
};
declare const ProductSimilarList: React.FC<ProductSimilarListProps>;
export default ProductSimilarList;
