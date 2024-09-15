import React from 'react';
import { FormFieldType, SyntheticEventType } from '../../../types';
type FormFieldProps = {
    field: FormFieldType;
    errors?: any;
    value?: any | any[];
    url?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleRemove?: (name: string) => void;
    handleAddAttachment?: (name: string, attachmentId: number) => void;
    handleRemoveAttachment?: (name: string) => void;
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const FormField: React.FC<FormFieldProps>;
export default FormField;
