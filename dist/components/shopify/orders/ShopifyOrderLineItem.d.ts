import React from 'react';
import { OrderLineItemType } from 'frontend-shopify';
type ShopifyOrderLineItemProps = {
    lineItem: OrderLineItemType;
    className?: string;
};
declare const ShopifyOrderLineItem: React.FC<ShopifyOrderLineItemProps>;
export default ShopifyOrderLineItem;
