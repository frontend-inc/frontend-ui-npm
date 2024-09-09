import React from 'react';
import { ShopifyMetafieldType, ShopifyProductType } from 'frontend-shopify';
type ShopifyProductMetafieldsProps = {
    product: ShopifyProductType;
    metafields: ShopifyMetafieldType[];
};
declare const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps>;
export default ShopifyProductMetafields;
