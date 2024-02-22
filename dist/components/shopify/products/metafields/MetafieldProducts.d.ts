import React from 'react';
import { MetafieldIdentifier } from 'frontend-shopify';
type MetafieldProductsProps = {
    title?: string;
    layout?: 'grid' | 'carousel';
    handle: string;
    metafield: MetafieldIdentifier;
};
declare const MetafieldProducts: React.FC<MetafieldProductsProps>;
export default MetafieldProducts;
