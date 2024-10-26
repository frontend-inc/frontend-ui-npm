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
export default function NumberSliderInput({ value, label, info, name, handleChange, min, max, stepSize, }: NumberSliderInputProps): React.JSX.Element;
export {};
