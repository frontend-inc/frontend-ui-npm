import React from 'react';
import { FormWizardProps } from './FormWizard';
export type FormWizardModalProps = FormWizardProps & {
    open: boolean;
    handleClose: () => void;
};
declare const FormWizardModal: React.FC<FormWizardModalProps>;
export default FormWizardModal;
