import React from 'react';
import { ActionType } from '../../../types';
type PriceListType = {
    fill?: boolean;
    border?: boolean;
    image: string;
    title: string;
    subtitle: string;
    action: ActionType;
    path?: string;
    url?: string;
    src?: string;
};
export type PriceListProps = {
    fill?: boolean;
    border?: boolean;
    items: PriceListType[];
};
declare const PriceList: React.FC<PriceListProps>;
export default PriceList;
