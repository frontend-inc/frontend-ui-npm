import React from 'react';
import { MetafieldIdentifier, Product } from 'frontend-shopify';
type ProductMetafieldsProps = {
    product: Product;
    metafields: MetafieldIdentifier[];
};
declare const ProductMetafields: React.FC<ProductMetafieldsProps>;
export default ProductMetafields;
