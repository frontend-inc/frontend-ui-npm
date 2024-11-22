import React from 'react';
import { FormDataWizardProps } from '../../components/cms/forms/FormDataWizard';
import { SectionProps } from '../../types';
type FormWizardProps = SectionProps & FormDataWizardProps;
declare const FormWizard: React.FC<FormWizardProps>;
export default FormWizard;
