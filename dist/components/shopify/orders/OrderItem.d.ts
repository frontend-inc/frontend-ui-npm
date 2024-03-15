import React from 'react';
import { OrderType } from 'frontend-shopify';
type OrderItemProps = {
    order: OrderType;
    handleClick: any;
};
declare const OrderItem: React.FC<OrderItemProps>;
export default OrderItem;
