import React from 'react';
import { CurrentUserFormWizardProps } from '../../components/auth/users/CurrentUserFormWizard';
import { SectionProps } from '../../types';
type AuthUserFormWizardProps = SectionProps & CurrentUserFormWizardProps;
declare const AuthUserFormWizard: React.FC<AuthUserFormWizardProps>;
export default AuthUserFormWizard;
