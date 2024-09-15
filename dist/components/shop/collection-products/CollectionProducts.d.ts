import React from 'react';
import { ProductListProps } from '../products/ProductList';
export type CollectionProductsProps = ProductListProps & {
    productCollectionId: string;
};
declare const CollectionProducts: React.FC<CollectionProductsProps>;
export default CollectionProducts;
