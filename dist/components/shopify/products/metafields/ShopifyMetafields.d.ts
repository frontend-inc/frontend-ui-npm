import React from 'react';
import { ShopifyMetafieldType } from 'frontend-shopify';
export type ShopifyProductMetafieldsProps = {
    shopifyProduct: any;
    metafields: ShopifyMetafieldType[];
};
declare const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps>;
export default ShopifyProductMetafields;
