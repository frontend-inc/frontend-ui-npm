import React from 'react';
import { SyntheticEventType } from '../../../types';
type NumberRangeInputProps = {
    label?: string;
    name: string;
    value?: {
        min: number;
        max: number;
    };
    info?: string;
    handleChange: (value: SyntheticEventType) => void;
};
declare const NumberRangeInput: React.FC<NumberRangeInputProps>;
export default NumberRangeInput;
