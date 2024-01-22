import React from "react";
import { Product } from "webstudio-shopify";
type SubscriptionSelectorProps = {
  product: Product;
  handleChange: any;
  activeSellingPlanId?: string;
};
declare const SubscriptionSelector: React.FC<SubscriptionSelectorProps>;
export default SubscriptionSelector;
