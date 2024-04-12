import React from 'react';
export type FormWizardProps = {
    field: {
        title: string;
        description: string;
        label: string;
        placeholder: string;
        name: string;
    };
    handleChange: (ev: any) => void;
    handleRemove: (name: string) => void;
    resource: any;
    fadeIn: boolean;
    setResource: (resource: any) => void;
};
declare const FormWizardField: React.FC<FormWizardProps>;
export default FormWizardField;
