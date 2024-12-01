import React from 'react';
import { PriceListProps } from '../../components/web/price-list/PriceList';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIPricesProps = SectionProps & HeadingProps & StackProps & PriceListProps;
declare const UIPrices: React.FC<UIPricesProps>;
export default UIPrices;
