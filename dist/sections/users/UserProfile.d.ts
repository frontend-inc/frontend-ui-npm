import React from 'react';
import { UserProfileProps } from '../../components/users/profile/UserProfile';
import { SectionProps } from '../../types';
type CmsUserProps = SectionProps & UserProfileProps;
declare const CmsUser: React.FC<CmsUserProps>;
export default CmsUser;
