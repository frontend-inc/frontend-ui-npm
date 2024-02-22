import React from 'react';
import { MetafieldIdentifier } from 'frontend-shopify';
type MetafieldImageProps = {
    handle: string;
    metafield: MetafieldIdentifier;
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
