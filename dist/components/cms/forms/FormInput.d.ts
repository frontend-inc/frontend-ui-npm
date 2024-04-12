import React from 'react';
import { SyntheticEventType } from '../../../types';
type FormInputProps = {
    variant: any;
    name: string;
    label?: string;
    errors?: any;
    value?: any | any[];
    options: any;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleRemove: (name: string) => void;
};
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
