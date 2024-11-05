import React from 'react';
import { ProductSortKeyType } from 'frontend-shopify';
type ShopifyProductSortButtonProps = {
    sortKey?: ProductSortKeyType;
    reverse?: boolean;
    handleClick: (sortKey: ProductSortKeyType, reverse: boolean) => void;
};
declare const ShopifyProductSortButton: React.FC<ShopifyProductSortButtonProps>;
export default ShopifyProductSortButton;
