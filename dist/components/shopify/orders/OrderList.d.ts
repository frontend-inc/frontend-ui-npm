import React from "react";
import { Order } from "webstudio-shopify";
type OrderListProps = {
  orders: Order[];
  handleClick: (id: string) => void;
};
declare const OrderList: React.FC<OrderListProps>;
export default OrderList;
