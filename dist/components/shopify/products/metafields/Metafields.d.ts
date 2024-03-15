import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
type ProductMetafieldsProps = {
    handle: string;
    metafields: MetafieldIdentifierType[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
