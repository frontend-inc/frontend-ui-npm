import React from 'react';
import { CurrentUserDetailsProps } from '../../components/auth/users/CurrentUserDetails';
import { SectionProps } from '../../types';
type AuthUserDetailsProps = SectionProps & CurrentUserDetailsProps;
declare const AuthUserDetails: React.FC<AuthUserDetailsProps>;
export default AuthUserDetails;
