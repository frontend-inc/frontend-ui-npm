import React from 'react';
type SliderValue = number | number[];
type SliderInputProps = {
    label?: string;
    name: string;
    value: SliderValue;
    handleChange: (value: SliderValue) => void;
    min: number;
    max: number;
    stepSize?: number;
    className?: string;
};
declare const SliderInput: React.FC<SliderInputProps>;
export default SliderInput;
