import React from 'react';
import { SyntheticEvent } from '../../../types';
type FormInputProps = {
    variant: any;
    name: string;
    label?: string;
    errors?: any;
    value?: any | any[];
    placeholder?: string;
    handleChange?: (e: SyntheticEvent) => void;
    handleRemove?: (name: string) => void;
};
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
