import React from 'react';
import { PricingProps } from '../../components/web/prices/Pricing';
import { SectionProps, HeadingProps } from '../../types';
type UIPricingProps = SectionProps & HeadingProps & PricingProps;
declare const UIPricing: React.FC<UIPricingProps>;
export default UIPricing;
