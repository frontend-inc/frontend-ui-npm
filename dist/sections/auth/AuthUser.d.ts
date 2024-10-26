import React from 'react';
import { CurrentUserProps } from '../../components/auth/users/CurrentUser';
import { SectionProps } from '../../types';
type AuthUserProps = SectionProps & CurrentUserProps;
declare const AuthUser: React.FC<AuthUserProps>;
export default AuthUser;
