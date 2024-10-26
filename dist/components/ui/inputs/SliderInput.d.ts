import React from 'react';
type SliderInputProps = {
    label?: string;
    name: string;
    value?: number[];
    handleChange: (value: number[]) => void;
    min: number;
    max: number;
    stepSize?: number;
    className?: string;
};
declare const SliderInput: React.FC<SliderInputProps>;
export default SliderInput;
