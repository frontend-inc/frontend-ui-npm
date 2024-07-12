import React from 'react';
import { FormFieldType, SyntheticEventType } from '../../../types';
type FormFieldInputProps = {
    resource: any;
    field: FormFieldType;
    errors?: any;
    value?: any | any[];
    url?: string;
    foreignUrl?: string;
    contentType?: string;
    fields?: FormFieldType[];
    handleChange: (e: SyntheticEventType) => void;
    handleRemove: (name: string) => void;
};
declare const FormFieldInput: React.FC<FormFieldInputProps>;
export default FormFieldInput;
