import React from 'react';
import { ProfileFormProps } from '../../components/auth/profiles/ProfileForm';
import { SectionProps, HeadingProps } from '../../types';
type AuthProfileFormProps = SectionProps & HeadingProps & ProfileFormProps;
declare const AuthProfileForm: React.FC<AuthProfileFormProps>;
export default AuthProfileForm;
