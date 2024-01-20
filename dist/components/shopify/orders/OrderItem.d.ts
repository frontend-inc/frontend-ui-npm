import React from 'react';
import { Order } from 'webstudio-shopify';
type OrderItemProps = {
    order: Order;
    handleClick: any;
};
declare const OrderItem: React.FC<OrderItemProps>;
export default OrderItem;
