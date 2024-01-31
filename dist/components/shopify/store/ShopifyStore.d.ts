import React from 'react';
type ShopifyStoreProps = {
    domain: string;
    storefrontAccessToken: string;
    logo?: string;
    shopUrl: string;
    children: any;
};
declare const ShopifyStore: React.FC<ShopifyStoreProps>;
export default ShopifyStore;
