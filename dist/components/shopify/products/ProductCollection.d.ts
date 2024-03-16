import React from 'react';
import { SearchFilterOptionType } from 'frontend-shopify';
type ProductCollectionProps = {
    title?: string;
    editing?: boolean;
    handle: string | string[];
    options: SearchFilterOptionType[];
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductCollection: React.FC<ProductCollectionProps>;
export default ProductCollection;
