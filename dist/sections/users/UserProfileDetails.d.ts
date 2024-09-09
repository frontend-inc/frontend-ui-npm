import React from 'react';
import { UserDetailsProps } from '../../components/users/profile/UserDetails';
import { SectionProps } from '../../types';
type CmsUserDetailsProps = SectionProps & UserDetailsProps;
declare const CmsUserDetails: React.FC<CmsUserDetailsProps>;
export default CmsUserDetails;
