import React from 'react';
export type ShopifyMetafieldVideoProps = {
    shopifyProduct: any;
    metafield: string;
    height?: number;
    controls?: boolean;
    autoPlay?: boolean;
};
declare const ShopifyMetafieldVideo: React.FC<ShopifyMetafieldVideoProps>;
export default ShopifyMetafieldVideo;
