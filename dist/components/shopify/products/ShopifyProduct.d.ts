import React from 'react';
import { ProductType } from 'frontend-shopify';
type ShopifyProductPageProps = {
    handle?: string | string[];
    product?: ProductType;
    children: any;
};
declare const ShopifyProduct: React.FC<ShopifyProductPageProps>;
export default ShopifyProduct;
