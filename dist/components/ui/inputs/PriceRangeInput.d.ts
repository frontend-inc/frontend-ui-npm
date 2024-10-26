import React from 'react';
import { NumberRangeInputProps } from './NumberRangeInput';
type PriceRangeInputProps = NumberRangeInputProps & {
    currency: string;
};
declare const PriceRangeInput: React.FC<PriceRangeInputProps>;
export default PriceRangeInput;
