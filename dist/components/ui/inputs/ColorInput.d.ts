import React from 'react';
import { SyntheticEventType } from '../../../types';
type ColorInputProps = {
    label?: string;
    placeholder?: string;
    name: string;
    value: string;
    handleChange: (e: SyntheticEventType) => void;
    errors?: any;
    disableTone?: boolean;
};
declare const ColorInput: React.FC<ColorInputProps>;
export default ColorInput;
