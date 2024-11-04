import React from 'react';
export type ShopifyCollectionCoverProps = {
    shopifyCollection: string;
    editing?: boolean;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    overlayColor?: string;
    buttonText?: string;
};
declare const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps>;
export default ShopifyCollectionCover;
