import React from 'react';
import { OrderLineItemType } from 'frontend-shopify';
type OrderLineItemProps = {
    lineItem: OrderLineItemType;
};
declare const OrderLineItem: React.FC<OrderLineItemProps>;
export default OrderLineItem;
