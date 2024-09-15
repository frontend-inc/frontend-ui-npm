import React from 'react';
import { FormFieldType } from '../../../types';
export type FormFieldsProps = {
    loading?: boolean;
    errors: any;
    resource: any;
    fields: FormFieldType[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemove?: (name: string) => void;
    handleAddAttachment?: (name: string, attachmentId: number) => void;
    handleRemoveAttachment?: (name: string) => void;
    handleSubmit?: () => void;
    buttonText?: string;
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const FormFields: React.FC<FormFieldsProps>;
export default FormFields;
