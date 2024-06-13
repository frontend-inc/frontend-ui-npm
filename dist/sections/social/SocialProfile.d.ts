import React from 'react';
import { UserProfileProps } from '../../components/social/users/UserProfile';
import { SectionProps } from '../../types';
type SocialProfileProps = SectionProps & UserProfileProps;
declare const SocialProfile: React.FC<SocialProfileProps>;
export default SocialProfile;
