import React from 'react';
import { FormWizardProps } from '../../components/cms/forms/FormWizard';
import { SectionProps } from '../../types';
type CmsFormWizardProps = SectionProps & FormWizardProps;
declare const CmsFormWizard: React.FC<CmsFormWizardProps>;
export default CmsFormWizard;
