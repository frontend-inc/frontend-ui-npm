import React from 'react';
import { ShopifyOrderType } from 'frontend-shopify';
type ShopifyOrderDetailsProps = {
    styles?: object;
    order: ShopifyOrderType;
    supportUrl?: string;
};
declare const ShopifyOrderDetails: React.FC<ShopifyOrderDetailsProps>;
export default ShopifyOrderDetails;
