import React from 'react';
import { SearchFilterOptionType } from 'frontend-shopify';
export type ShopifyProductSearchProps = {
    handle: string;
    options?: SearchFilterOptionType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductSearch: React.FC<ShopifyProductSearchProps>;
export default ShopifyProductSearch;
