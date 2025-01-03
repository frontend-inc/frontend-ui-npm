import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductDetailsProps = {
    product?: ShopifyProductType;
    price?: number;
    compareAtPrice?: number;
};
declare const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps>;
export default ShopifyProductDetails;
