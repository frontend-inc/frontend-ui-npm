import React from 'react';
import { SignupProps } from '../../components/auth/signup/Signup';
import { SectionProps } from '../../types';
type AuthSignupProps = SectionProps & SignupProps;
declare const AuthSignup: React.FC<AuthSignupProps>;
export default AuthSignup;
