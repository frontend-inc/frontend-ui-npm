import React from 'react';
export type FormWizardInputWrapperProps = {
    title: string;
    description?: string;
    fadeIn: boolean;
    timeout?: number;
    children: React.ReactNode;
};
declare const FormWizardInputWrapper: React.FC<FormWizardInputWrapperProps>;
export default FormWizardInputWrapper;
