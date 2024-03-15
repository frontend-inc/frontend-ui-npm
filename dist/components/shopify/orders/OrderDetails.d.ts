import React from 'react';
import { OrderType } from 'frontend-shopify';
type OrderDetailsProps = {
    styles?: object;
    order: OrderType;
    supportUrl?: string;
};
declare const OrderDetails: React.FC<OrderDetailsProps>;
export default OrderDetails;
