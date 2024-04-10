import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
export type MetafieldImageProps = {
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
declare const MetafieldImage: React.FC<MetafieldImageProps>;
export default MetafieldImage;
