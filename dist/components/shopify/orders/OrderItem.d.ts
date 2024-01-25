import React from 'react';
import { Order } from 'frontend-shopify';
type OrderItemProps = {
    order: Order;
    handleClick: any;
};
declare const OrderItem: React.FC<OrderItemProps>;
export default OrderItem;
