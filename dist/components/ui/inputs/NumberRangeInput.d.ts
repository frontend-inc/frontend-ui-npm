import React from 'react';
import { SyntheticEventType } from '../../../types';
type NumberRangeInputProps = {
    label?: string;
    name: string;
    value?: number[];
    handleChange: (value: SyntheticEventType) => void;
    currency?: string;
};
declare const NumberRangeInput: React.FC<NumberRangeInputProps>;
export default NumberRangeInput;
