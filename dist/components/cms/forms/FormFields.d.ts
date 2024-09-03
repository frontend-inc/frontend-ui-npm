import React from 'react';
import { FormFieldType } from '../../../types';
export type FormProps = {
    loading?: boolean;
    errors: any;
    fields: FormFieldType[];
    resource: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemove?: (name: string) => void;
    handleSubmit?: () => void;
    buttonText?: string;
};
declare const FormFields: React.FC<FormProps>;
export default FormFields;
