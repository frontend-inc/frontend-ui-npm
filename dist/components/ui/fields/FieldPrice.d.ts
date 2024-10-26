import React from 'react';
import { FieldElementProps } from './Field';
type FieldPriceProps = FieldElementProps & {
    rest?: any;
    currency?: string;
    digits?: number;
};
declare const FieldPrice: React.FC<FieldPriceProps>;
export default FieldPrice;
