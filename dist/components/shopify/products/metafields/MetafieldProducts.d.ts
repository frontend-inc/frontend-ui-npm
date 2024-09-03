import React from 'react';
export type MetafieldProductsProps = {
    layout?: 'grid' | 'carousel';
    shopifyProduct: any;
    href: string;
    metafield: string;
};
declare const MetafieldProducts: React.FC<MetafieldProductsProps>;
export default MetafieldProducts;
