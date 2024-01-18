import React from 'react';
import { SyntheticEvent } from '../../../types';
type NumberSliderInputProps = {
    label?: string;
    name: string;
    value?: number[];
    handleChange: (value: SyntheticEvent) => void;
    min: number;
    max: number;
    stepSize?: number;
};
declare const NumberSliderInput: React.FC<NumberSliderInputProps>;
export default NumberSliderInput;
