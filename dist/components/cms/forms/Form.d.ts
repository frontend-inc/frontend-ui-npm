import React from 'react';
import { FormFieldType, SyntheticEventType } from '../../../types';
export type FormProps = {
    loading: boolean;
    errors: any;
    fields: FormFieldType[];
    resource: any;
    handleChange: (e: SyntheticEventType) => void;
    handleRemove: (name: string) => void;
    handleSubmit?: () => void;
    buttonText?: string;
};
declare const Form: React.FC<FormProps>;
export default Form;
