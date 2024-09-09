import React from 'react';
export type ShopifyCardProps = {
    collection?: any;
    href?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ShopifyCollectionCard: React.FC<ShopifyCardProps>;
export default ShopifyCollectionCard;
