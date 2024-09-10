import React from 'react';
import { SubscriptionType } from '../../../types';
type SubscriptionTableCardProps = {
    selected?: boolean;
    buttonText?: string;
    handleClick: () => void;
    subscription: SubscriptionType;
};
declare const SubscriptionTableCard: React.FC<SubscriptionTableCardProps>;
export default SubscriptionTableCard;
