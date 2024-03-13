import React from 'react';
import { SyntheticEventType } from '../../../types';
type FormFieldProps = {
    field: any;
    errors?: any;
    value?: any | any[];
    handleChange?: (e: SyntheticEventType) => void;
    handleRemove?: (name: string) => void;
};
declare const FormField: React.FC<FormFieldProps>;
export default FormField;
