import React from 'react';
type ShopifyStoreProps = {
    enableShopify?: boolean;
    domain: string;
    storefrontAccessToken: string;
    customerPortalUrl?: string;
    logo?: string;
    shopUrl: string;
    children: any;
};
declare const ShopifyStore: React.FC<ShopifyStoreProps>;
export default ShopifyStore;
