import React from 'react';
export type DataFormWizardProps = {
    buttonText?: string;
    formId: number;
    handleSuccess?: (resource: any) => void;
};
declare const DataFormWizard: React.FC<DataFormWizardProps>;
export default DataFormWizard;
