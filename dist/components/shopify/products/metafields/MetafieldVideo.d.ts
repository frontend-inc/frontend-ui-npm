import React from 'react';
export type MetafieldVideoProps = {
    shopifyProduct: any;
    metafield: string;
    height?: number;
    controls?: boolean;
    autoPlay?: boolean;
};
declare const MetafieldVideo: React.FC<MetafieldVideoProps>;
export default MetafieldVideo;
