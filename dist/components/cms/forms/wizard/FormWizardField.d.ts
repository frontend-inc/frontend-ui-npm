import React from 'react';
export type FormWizardProps = {
    field: {
        variant: string;
        title: string;
        description: string;
        label: string;
        placeholder: string;
        name: string;
        options: any;
    };
    handleChange: (ev: any) => void;
    handleRemove: (name: string) => void;
    handleAddAttachment: (field: string, attachmentId: number) => void;
    handleRemoveAttachment: (field: string) => void;
    resource: any;
    fadeIn: boolean;
    setResource: (resource: any) => void;
};
declare const FormWizardField: React.FC<FormWizardProps>;
export default FormWizardField;
