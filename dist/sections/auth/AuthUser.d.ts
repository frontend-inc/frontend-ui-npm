import React from 'react';
import { UserProfileProps } from '../../components/social/users/UserProfile';
import { SectionProps } from '../../types';
type AuthUserProps = SectionProps & UserProfileProps;
declare const AuthUser: React.FC<AuthUserProps>;
export default AuthUser;
