import React from 'react';
import { Order } from 'webstudio-shopify';
type OrderDetailsProps = {
    styles?: object;
    order: Order;
    supportUrl?: string;
};
declare const OrderDetails: React.FC<OrderDetailsProps>;
export default OrderDetails;
