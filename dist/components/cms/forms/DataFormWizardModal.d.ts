import React from 'react';
import { HeadingProps } from '../../../types';
export type DataFormWizardProps = HeadingProps & {
    formId: number;
    handleSuccess?: (resource: any) => void;
};
declare const DataFormWizard: React.FC<DataFormWizardProps>;
export default DataFormWizard;
