import React from 'react';
import { PriceType } from '../../..';
export type SubscriptionPlansProps = {
    items: PriceType[];
    precision?: number;
    variant?: 'outline' | 'fill' | 'default';
};
declare const SubscriptionPlans: React.FC<SubscriptionPlansProps>;
export default SubscriptionPlans;
