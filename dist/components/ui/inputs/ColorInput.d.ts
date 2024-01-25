import React from 'react';
import { SyntheticEvent } from '../../../types';
type ColorInputProps = {
    errors?: any;
    name: string;
    value: string;
    handleChange: (e: SyntheticEvent) => void;
    component?: any;
    disableTone?: boolean;
};
declare const ColorInput: React.FC<ColorInputProps>;
export default ColorInput;
