import React from 'react';
import { MetafieldIdentifier } from 'frontend-shopify';
type MetafieldVideoProps = {
    handle: string;
    metafield: MetafieldIdentifier;
    height?: number;
    controls?: boolean;
    autoPlay?: boolean;
};
declare const MetafieldVideo: React.FC<MetafieldVideoProps>;
export default MetafieldVideo;
