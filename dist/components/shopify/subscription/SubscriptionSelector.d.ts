import React from 'react';
import { Product } from 'frontend-shopify';
type SubscriptionSelectorProps = {
    product: Product;
    handleChange: any;
    activeSellingPlanId?: string;
};
declare const SubscriptionSelector: React.FC<SubscriptionSelectorProps>;
export default SubscriptionSelector;
