import React from 'react';
export type ShopifyCollectionCoverProps = {
    shopifyCollection: string;
    alignItems?: 'items-center' | 'items-start' | 'items-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    overlayColor?: string;
    buttonText?: string;
    enableQuantity?: boolean;
    enableAddToCart?: boolean;
};
declare const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps>;
export default ShopifyCollectionCover;
