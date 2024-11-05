import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
export type ShopifyProductCollectionProps = {
    shopifyCollection: string;
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProductCollection: React.FC<ShopifyProductCollectionProps>;
export default ShopifyProductCollection;
