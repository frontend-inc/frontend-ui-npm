import React from 'react';
import { ShopifyOrderType } from 'frontend-shopify';
type ShopifyOrderItemProps = {
    order: ShopifyOrderType;
    handleClick: any;
};
declare const ShopifyOrderItem: React.FC<ShopifyOrderItemProps>;
export default ShopifyOrderItem;
