import React from 'react';
type ShopifyStoreProps = {
    domain: string;
    storefrontAccessToken: string;
    segmentWriteKey?: string;
    logo?: string;
    authCookie: string;
    shopUrl: string;
    children: any;
};
declare const ShopifyStore: React.FC<ShopifyStoreProps>;
export default ShopifyStore;
