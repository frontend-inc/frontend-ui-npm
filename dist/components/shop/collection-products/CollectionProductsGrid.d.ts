import React from 'react';
import { ProductListProps } from '../products/ProductList';
export type CollectionProductsGridProps = ProductListProps & {
    productCollectionId: string;
};
declare const CollectionProductsGrid: React.FC<CollectionProductsGridProps>;
export default CollectionProductsGrid;
