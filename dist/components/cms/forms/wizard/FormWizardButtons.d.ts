import React from 'react';
type FormWizardButtonsProps = {
    currentStep: number;
    totalSteps: number;
    buttonText: string;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    handleSubmit: () => void;
};
declare const FormWizardButtons: React.FC<FormWizardButtonsProps>;
export default FormWizardButtons;
