import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
export type ShopifyProductCollectionProps = {
    href?: string;
    handle: string;
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ShopifyProductCollection: React.FC<ShopifyProductCollectionProps>;
export default ShopifyProductCollection;
