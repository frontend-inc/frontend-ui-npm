import React from 'react';
import { ActionType } from '../../../types';
export type PriceListItemProps = {
    variant?: 'fill' | 'outline' | 'default';
    image: string;
    title: string;
    subtitle: string;
    price?: string;
    action: ActionType;
    path?: string;
    url?: string;
    src?: string;
};
declare const PriceListItem: React.FC<PriceListItemProps>;
export default PriceListItem;
