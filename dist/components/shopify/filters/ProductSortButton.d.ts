import React from 'react';
import { ProductSortKeyType } from 'frontend-shopify';
type ProductSortButtonProps = {
    sortKey?: ProductSortKeyType;
    reverse?: boolean;
    handleClick: any;
};
declare const ProductSortButton: React.FC<ProductSortButtonProps>;
export default ProductSortButton;
