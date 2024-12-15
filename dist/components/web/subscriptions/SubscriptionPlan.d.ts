import React from 'react';
type SubscriptionPlanProps = {
    label?: string;
    title: string;
    subtitle?: string;
    features?: string[];
    price: number;
    compareAtPrice?: number;
    buttonText?: string;
    url?: string;
    path?: string;
    interval?: string;
    popular?: boolean;
    precision?: number;
    variant?: 'outline' | 'fill' | 'default';
    handleClick?: () => void;
};
declare const SubscriptionPlan: React.FC<SubscriptionPlanProps>;
export default SubscriptionPlan;
