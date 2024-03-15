import React from 'react';
import { MetafieldIdentifierType } from 'frontend-shopify';
type MetafieldVideoProps = {
    handle: string;
    metafield: MetafieldIdentifierType;
    height?: number;
    controls?: boolean;
    autoPlay?: boolean;
};
declare const MetafieldVideo: React.FC<MetafieldVideoProps>;
export default MetafieldVideo;
