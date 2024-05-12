import React from 'react';
import { LoginProps } from '../../components/auth/login/Login';
import { SectionProps } from '../../types';
type AuthLoginProps = SectionProps & LoginProps;
declare const AuthLogin: React.FC<AuthLoginProps>;
export default AuthLogin;
