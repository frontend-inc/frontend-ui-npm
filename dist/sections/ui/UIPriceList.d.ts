import React from 'react';
import { PriceListProps } from '../../components/web/price-list/PriceList';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIPriceListProps = SectionProps & HeadingProps & StackProps & PriceListProps;
declare const UIPriceList: React.FC<UIPriceListProps>;
export default UIPriceList;
