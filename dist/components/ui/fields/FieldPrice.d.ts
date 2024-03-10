import React from 'react';
import { TypographyVariantsType } from '../../../types';
type FieldPriceProps = {
    value?: any;
    label?: string;
    placeholder?: string;
    variant?: TypographyVariantsType;
    color?: string;
    rest?: any;
    currency?: string;
    digits?: number;
};
declare const FieldPrice: React.FC<FieldPriceProps>;
export default FieldPrice;
