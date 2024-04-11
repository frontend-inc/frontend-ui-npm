import React from 'react';
export type FormWizardProps = {
    handle: string;
    py?: number;
    url: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    children?: React.ReactElement[];
    title: string;
    description: string;
    buttonText?: string;
    image: string;
    endTitle: string;
    endDescription: string;
    endImage: string;
    endButtonText: string;
};
declare const FormWizard: React.FC<FormWizardProps>;
export default FormWizard;
