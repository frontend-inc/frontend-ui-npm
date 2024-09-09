import React from 'react';
import { SubscriptionPlanType } from '../../../types';
type SubscriptionTableCardProps = {
    selected?: boolean;
    buttonText?: string;
    handleClick: () => void;
    subscriptionPlan: SubscriptionPlanType;
};
declare const SubscriptionTableCard: React.FC<SubscriptionTableCardProps>;
export default SubscriptionTableCard;
