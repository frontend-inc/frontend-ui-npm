import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
export type ShopifyProductSearchProps = {
    handle: string;
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    inStockFilter?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductSearch: React.FC<ShopifyProductSearchProps>;
export default ShopifyProductSearch;
