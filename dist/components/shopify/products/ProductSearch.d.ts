import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
type ProductSearchProps = {
    title?: string;
    editing?: boolean;
    handle: string | string[];
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    inStockFilter?: boolean;
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductSearch: React.FC<ProductSearchProps>;
export default ProductSearch;
