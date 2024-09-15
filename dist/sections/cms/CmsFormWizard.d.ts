import React from 'react';
import { DocumentFormWizardModalProps } from '../../components/cms/forms/DocumentFormWizardModal';
import { SectionProps } from '../../types';
type CmsFormWizardProps = SectionProps & DocumentFormWizardModalProps;
declare const CmsFormWizard: React.FC<CmsFormWizardProps>;
export default CmsFormWizard;
