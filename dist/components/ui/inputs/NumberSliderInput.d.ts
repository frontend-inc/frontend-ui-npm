import React from 'react';
import { SyntheticEventType } from '../../../types';
type NumberSliderInputProps = {
    label?: string;
    name: string;
    value?: number[];
    handleChange: (value: SyntheticEventType) => void;
    min: number;
    max: number;
    stepSize?: number;
    info?: string;
};
declare const NumberSliderInput: React.FC<NumberSliderInputProps>;
export default NumberSliderInput;
