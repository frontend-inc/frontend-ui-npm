import React from 'react';
import { SyntheticEventType } from '../../../types';
export type FormWizardProps = {
    loading?: boolean;
    errors?: any;
    resource?: any;
    setResource: (resource: any) => void;
    handleChange: (ev: SyntheticEventType) => void;
    handleSubmit: () => void;
    handleRemove: (field: any) => void;
    handleAddAttachment: (field: string, attachmentId: number) => void;
    handleRemoveAttachment: (field: string) => void;
    buttonText?: string;
    fields: any[];
    handleSuccess?: () => void;
};
declare const FormWizard: React.FC<FormWizardProps>;
export default FormWizard;
