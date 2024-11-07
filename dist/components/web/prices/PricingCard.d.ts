import React from 'react';
type PricingCardProps = {
    label?: string;
    title: string;
    description?: string;
    features?: string[];
    price: string | number;
    buttonText?: string;
    url?: string;
    path?: string;
    interval?: string;
    recurring?: boolean;
    popular?: boolean;
};
declare const PricingCard: React.FC<PricingCardProps>;
export default PricingCard;
