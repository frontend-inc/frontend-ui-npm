import React from 'react';
export type ShopifyCollectionsProps = {
    href: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyCollections: React.FC<ShopifyCollectionsProps>;
export default ShopifyCollections;
