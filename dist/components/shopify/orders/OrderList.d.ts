import React from 'react';
import { OrderType } from 'frontend-shopify';
type OrderListProps = {
    orders: OrderType[];
    handleClick: (id: string) => void;
};
declare const OrderList: React.FC<OrderListProps>;
export default OrderList;
