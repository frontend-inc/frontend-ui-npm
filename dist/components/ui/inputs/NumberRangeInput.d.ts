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
export default function NumberRangeInput({ value, name, label, handleChange, currency, info, startAdornment, }: NumberRangeInputProps): React.JSX.Element;
