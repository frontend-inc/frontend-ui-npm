import React from 'react';
type FormWizardButtonsProps = {
    loading?: boolean;
    currentStep: number;
    totalSteps: number;
    buttonText: string;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    handleSubmit: () => void;
};
export default function FormWizardButtons(props: FormWizardButtonsProps): React.JSX.Element;
export {};
