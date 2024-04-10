import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
export type MetafieldProductsProps = {
    layout?: 'grid' | 'carousel';
    handle: string;
    metafield: MetafieldIdentifierType;
};
declare const MetafieldProducts: React.FC<MetafieldProductsProps>;
export default MetafieldProducts;
