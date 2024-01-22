import React, { useEffect } from "react";
import { AuthScreen, LayoutLoader } from "../../../components";
import { useOrders } from "webstudio-shopify";
import { OrderDetails } from "../../../components/shopify";
import moment from "moment";

type OrderProps = {
  title?: string;
  subtitle?: string;
  orderId: string;
};

const Order: React.FC<OrderProps> = (props) => {
  let { orderId } = props;
  if (orderId == "new") {
    orderId = null;
  }

  const { loading, order, fetchCustomerOrder } = useOrders();

  useEffect(() => {
    if (orderId) {
      fetchCustomerOrder(orderId);
    }
  }, [orderId]);

  return (
    <LayoutLoader loading={loading}>
      <AuthScreen
        title={`Order ${order.name}`}
        subtitle={moment(order?.processedAt).format("MMMM Do, YYYY")}
      >
        <OrderDetails order={order} />
      </AuthScreen>
    </LayoutLoader>
  );
};

export default Order;
