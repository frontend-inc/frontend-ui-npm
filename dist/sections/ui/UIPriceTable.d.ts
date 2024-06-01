import React from 'react';
import { PriceTableProps } from '../../components/web/prices/PriceTable';
import { SectionProps, HeadingProps } from '../../types';
type UIPriceTableProps = SectionProps & HeadingProps & PriceTableProps;
declare const UIPriceTable: React.FC<UIPriceTableProps>;
export default UIPriceTable;
