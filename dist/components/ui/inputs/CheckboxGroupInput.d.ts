import React from 'react';
import { OptionType } from '../../../types';
type CheckboxGroupInputProps = {
    errors: any;
    name: string;
    label: string;
    value?: string[];
    options: OptionType[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const CheckboxGroupInput: React.FC<CheckboxGroupInputProps>;
export default CheckboxGroupInput;
