import React from 'react';
import { ProductCollectionSortKey } from 'webstudio-shopify';
type ProductSortButtonProps = {
    sortKey?: ProductCollectionSortKey;
    reverse?: boolean;
    handleClick: any;
};
declare const ProductSortButton: React.FC<ProductSortButtonProps>;
export default ProductSortButton;
