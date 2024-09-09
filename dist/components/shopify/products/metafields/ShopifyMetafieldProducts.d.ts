import React from 'react';
export type ShopifyMetafieldProductsProps = {
    layout?: 'grid' | 'carousel';
    shopifyProduct: any;
    href: string;
    metafield: string;
};
declare const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps>;
export default ShopifyMetafieldProducts;
