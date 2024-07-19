import React from 'react';
import { UserDetailsProps } from '../../components/auth/users/UserDetails';
import { SectionProps } from '../../types';
type AuthUserDetailsProps = SectionProps & UserDetailsProps;
declare const AuthUserDetails: React.FC<AuthUserDetailsProps>;
export default AuthUserDetails;
