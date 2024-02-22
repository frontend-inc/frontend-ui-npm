import React from 'react';
import { MetafieldIdentifier } from 'frontend-shopify';
type ProductMetafieldsProps = {
    handle: string;
    metafields: MetafieldIdentifier[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
