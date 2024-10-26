import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
export type ShopifyMetafieldImageProps = {
    handle: string;
    metafield: MetafieldIdentifierType;
    height: number;
    objectFit?: 'cover' | 'contain';
    bgcolor?: string;
    opacity?: number;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ShopifyMetafieldImage: React.FC<ShopifyMetafieldImageProps>;
export default ShopifyMetafieldImage;
