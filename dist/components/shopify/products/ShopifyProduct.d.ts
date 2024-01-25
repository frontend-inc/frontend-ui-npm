import React from 'react';
import { Product } from 'frontend-shopify';
type ShopifyProductPageProps = {
    handle?: string | string[];
    product?: Product;
    children: any;
};
declare const ShopifyProduct: React.FC<ShopifyProductPageProps>;
export default ShopifyProduct;
