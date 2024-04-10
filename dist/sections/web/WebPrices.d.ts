import React from 'react';
import { PricesProps } from '../../components/web/prices/Prices';
import { SectionProps, HeadingProps } from '../../types';
type WebPricesProps = SectionProps & HeadingProps & PricesProps;
declare const WebPrices: React.FC<WebPricesProps>;
export default WebPrices;
