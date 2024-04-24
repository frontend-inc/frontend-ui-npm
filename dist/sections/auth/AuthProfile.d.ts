import React from 'react';
import { ProfileProps } from '../../components/auth/profiles/Profile';
import { SectionProps } from '../../types';
type AuthProfileProps = SectionProps & ProfileProps;
declare const AuthProfile: React.FC<AuthProfileProps>;
export default AuthProfile;
