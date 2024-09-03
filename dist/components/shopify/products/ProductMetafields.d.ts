import React from 'react';
import { ShopifyMetafieldType, ProductType } from 'frontend-shopify';
type ProductMetafieldsProps = {
    product: ProductType;
    metafields: ShopifyMetafieldType[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
