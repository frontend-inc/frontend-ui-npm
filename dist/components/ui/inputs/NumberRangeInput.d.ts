import React from 'react';
import { SyntheticEventType } from '../../../types';
export type NumberRangeInputProps = {
    label?: string;
    name?: string;
    value?: {
        min: number;
        max: number;
    };
    handleChange?: (value: SyntheticEventType) => void;
    currency?: string;
    info?: string;
    startAdornment?: React.ReactNode;
};
declare const NumberRangeInput: React.FC<NumberRangeInputProps>;
export default NumberRangeInput;
