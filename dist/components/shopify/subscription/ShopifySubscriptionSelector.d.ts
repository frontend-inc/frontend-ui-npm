import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifySubscriptionSelectorProps = {
    product: ShopifyProductType;
    handleChange: (value: string) => void;
    activeSellingPlanId?: string;
};
declare const ShopifySubscriptionSelector: React.FC<ShopifySubscriptionSelectorProps>;
export default ShopifySubscriptionSelector;
