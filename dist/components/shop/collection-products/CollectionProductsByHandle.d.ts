import React from 'react';
import { ProductListProps } from '../products/ProductList';
export type CollectionProductsByHandleProps = ProductListProps & {
    productCollectionId: string;
};
declare const CollectionProductsByHandle: React.FC<CollectionProductsByHandleProps>;
export default CollectionProductsByHandle;
