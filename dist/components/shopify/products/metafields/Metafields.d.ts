import React from 'react';
import { ShopifyMetafieldType } from 'frontend-shopify';
export type ProductMetafieldsProps = {
    shopifyProduct: any;
    metafields: ShopifyMetafieldType[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
