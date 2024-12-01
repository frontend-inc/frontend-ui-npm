import React from 'react';
import { ActionType } from '../../../types';
type PriceListType = {
    variant?: 'fill' | 'outline' | 'default';
    image: string;
    title: string;
    subtitle: string;
    action: ActionType;
    path?: string;
    url?: string;
    src?: string;
};
export type PriceListProps = {
    variant?: 'fill' | 'outline' | 'default';
    items: PriceListType[];
};
declare const PriceList: React.FC<PriceListProps>;
export default PriceList;
