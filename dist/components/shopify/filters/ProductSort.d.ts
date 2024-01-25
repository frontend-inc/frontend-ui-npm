import React from 'react';
import { ProductCollectionSortKey } from 'frontend-shopify';
type ProductSortButtonProps = {
    sortKey?: ProductCollectionSortKey;
    reverse?: boolean;
    handleClick: any;
};
declare const ProductSortButton: React.FC<ProductSortButtonProps>;
export default ProductSortButton;
