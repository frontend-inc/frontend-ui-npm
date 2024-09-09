import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductDescriptionProps = {
    product?: ShopifyProductType;
    color?: string;
};
declare const ShopifyProductDescription: React.FC<ShopifyProductDescriptionProps>;
export default ShopifyProductDescription;
