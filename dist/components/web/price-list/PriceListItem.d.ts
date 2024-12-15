import React from 'react';
export type PriceListItemProps = {
    variant?: 'fill' | 'outline' | 'default';
    image: string;
    title: string;
    subtitle: string;
    price?: string;
    precision?: number;
    path?: string;
    url?: string;
    handleImageClick: () => void;
};
declare const PriceListItem: React.FC<PriceListItemProps>;
export default PriceListItem;
