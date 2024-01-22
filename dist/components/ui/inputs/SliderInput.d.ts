import React from "react";
type SliderInputProps = {
    label?: string;
    name: string;
    value?: number[];
    handleChange: (ev: any) => void;
    min: number;
    max: number;
    stepSize?: number;
};
declare const SliderInput: React.FC<SliderInputProps>;
export default SliderInput;
