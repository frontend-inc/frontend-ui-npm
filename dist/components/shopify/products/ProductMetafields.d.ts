import React from 'react';
import { MetafieldIdentifierType, ProductType } from 'frontend-shopify';
type ProductMetafieldsProps = {
    product: ProductType;
    metafields: MetafieldIdentifierType[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
