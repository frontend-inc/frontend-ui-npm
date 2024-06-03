import React from 'react';
import { PurchasesProps } from '../../components/commerce/purchases/Purchases';
import { SectionProps, HeadingProps } from '../../types';
type CommercePurchasesProps = SectionProps & HeadingProps & PurchasesProps;
declare const CommercePurchases: React.FC<CommercePurchasesProps>;
export default CommercePurchases;
