import React from 'react';
import { PriceType } from '../../..';
export type SubscriptionPlansProps = {
    items: PriceType[];
    precision?: number;
    variant?: 'outline' | 'fill' | 'default';
    handleClick: (item: PriceType) => void;
};
declare const SubscriptionPlans: React.FC<SubscriptionPlansProps>;
export default SubscriptionPlans;
