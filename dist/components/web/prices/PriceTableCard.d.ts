import React from 'react';
type PriceCardProps = {
    label?: string;
    title: string;
    description?: string;
    features?: string[];
    price: string | number;
    buttonText?: string;
    url?: string;
};
declare const PriceCard: React.FC<PriceCardProps>;
export default PriceCard;
