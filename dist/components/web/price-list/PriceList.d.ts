import React from 'react';
type PriceListType = {
    variant?: 'fill' | 'outline' | 'default';
    image: string;
    title: string;
    subtitle: string;
    path?: string;
    url?: string;
};
export type PriceListProps = {
    variant?: 'fill' | 'outline' | 'default';
    items: PriceListType[];
};
declare const PriceList: React.FC<PriceListProps>;
export default PriceList;
