import React from 'react';
import { SyntheticEventType } from '../../../types';
type NumberRangeInputProps = {
    label?: string;
    name: string;
    value?: {
        min: number;
        max: number;
    };
    handleChange: (value: SyntheticEventType) => void;
    currency?: string;
    info?: string;
};
declare const NumberRangeInput: React.FC<NumberRangeInputProps>;
export default NumberRangeInput;
