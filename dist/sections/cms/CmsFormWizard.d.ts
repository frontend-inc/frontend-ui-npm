import React from 'react';
import { DataFormWizardProps } from '../../components/cms/forms/DataFormWizardModal';
import { SectionProps } from '../../types';
type CmsFormWizardProps = SectionProps & DataFormWizardProps;
declare const CmsFormWizard: React.FC<CmsFormWizardProps>;
export default CmsFormWizard;
