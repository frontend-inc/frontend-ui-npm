import React from 'react';
import { HeadingProps } from '../../../types';
export type FormDataWizardProps = HeadingProps & {
    formId: number;
    title?: string;
    description?: string;
    buttonText: string;
    endButtonText: string;
    handleSuccess?: (resource: any) => void;
};
declare const FormDataWizard: React.FC<FormDataWizardProps>;
export default FormDataWizard;
