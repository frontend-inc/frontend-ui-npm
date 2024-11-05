import React from 'react';
type SubscriptionCardProps = {
    loading?: boolean;
    selected?: boolean;
    label?: string;
    title: string;
    subtitle: string;
    price: string;
    description: string;
    buttonText?: string;
    handleClick: () => void;
};
export default function SubscriptionCard(props: SubscriptionCardProps): React.JSX.Element;
export {};
