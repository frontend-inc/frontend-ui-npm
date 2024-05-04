import React from 'react';
import { ProfileFormWizardProps } from '../../components/auth/profiles/ProfileFormWizard';
import { SectionProps } from '../../types';
type AuthProfileFormWizardProps = SectionProps & ProfileFormWizardProps;
declare const AuthProfileFormWizard: React.FC<AuthProfileFormWizardProps>;
export default AuthProfileFormWizard;
