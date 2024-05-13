import React from 'react';
import { FormWizardProps } from '../../components/cms/forms/FormWizard';
import { SectionProps } from '../../types';
type AuthCmsFormProps = SectionProps & FormWizardProps;
declare const AuthCmsFormWizard: React.FC<AuthCmsFormProps>;
export default AuthCmsFormWizard;
