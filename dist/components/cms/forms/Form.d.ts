import React from 'react';
import { FormFieldType } from '../../../types';
export type FormProps = {
    loading?: boolean;
    errors: any;
    fields: FormFieldType[];
    resource: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemove?: (name: string) => void;
    handleAddAttachment?: (name: string, attachmentId: number) => void;
    handleRemoveAttachment?: (name: string) => void;
    handleSubmit: () => void;
    buttonText?: string;
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const Form: React.FC<FormProps>;
export default Form;
