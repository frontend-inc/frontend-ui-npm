import React from 'react';
import { ProductType } from 'frontend-shopify';
type SubscriptionSelectorProps = {
    product: ProductType;
    handleChange: any;
    activeSellingPlanId?: string;
};
declare const SubscriptionSelector: React.FC<SubscriptionSelectorProps>;
export default SubscriptionSelector;
