import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifySubscriptionSelectorProps = {
    product: ShopifyProductType;
    handleChange: any;
    activeSellingPlanId?: string;
};
declare const ShopifySubscriptionSelector: React.FC<ShopifySubscriptionSelectorProps>;
export default ShopifySubscriptionSelector;
