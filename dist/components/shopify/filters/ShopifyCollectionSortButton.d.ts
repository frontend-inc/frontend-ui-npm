import React from 'react';
import { ProductSortKeyType } from 'frontend-shopify';
type ShopifyCollectionSortButtonProps = {
    sortKey?: ProductSortKeyType;
    reverse?: boolean;
    handleClick: (sortKey: ProductSortKeyType, reverse: boolean) => void;
};
declare const ShopifyCollectionSortButton: React.FC<ShopifyCollectionSortButtonProps>;
export default ShopifyCollectionSortButton;
