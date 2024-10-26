import React from 'react';
import { SubscriptionType } from '../../../types';
type SubscriptionTableCardProps = {
    selected?: boolean;
    buttonText?: string;
    handleClick: () => void;
    subscription: SubscriptionType;
};
export default function SubscriptionTableCard({ buttonText, selected, handleClick, subscription, }: SubscriptionTableCardProps): React.JSX.Element;
export {};
