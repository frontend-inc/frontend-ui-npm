import React from 'react';
import { PriceType } from '../../..';
type PricesProps = {
    title?: string;
    items: PriceType[];
};
declare const Prices: React.FC<PricesProps>;
export default Prices;
