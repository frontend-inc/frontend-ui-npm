import React from 'react';
import { ShopifyOrderType } from 'frontend-shopify';
type ShopifyOrderDetailsProps = {
    className?: string;
    order: ShopifyOrderType;
    supportUrl?: string;
};
declare const ShopifyOrderDetails: React.FC<ShopifyOrderDetailsProps>;
export default ShopifyOrderDetails;
