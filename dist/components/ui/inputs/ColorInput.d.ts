import React from 'react';
import { SyntheticEvent } from '../../../types';
type ColorInputProps = {
    name: string;
    value: string;
    handleChange: (e: SyntheticEvent) => void;
    errors?: any;
    disableTone?: boolean;
};
declare const ColorInput: React.FC<ColorInputProps>;
export default ColorInput;
