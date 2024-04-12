import React from 'react';
import { SyntheticEventType } from '../../../types';
type FormFieldInputProps = {
    field: any;
    errors?: any;
    value?: any | any[];
    handleChange: (e: SyntheticEventType) => void;
    handleRemove?: (name: string) => void;
};
declare const FormFieldInput: React.FC<FormFieldInputProps>;
export default FormFieldInput;
