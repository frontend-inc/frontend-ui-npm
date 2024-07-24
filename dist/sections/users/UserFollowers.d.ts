import React from 'react';
import { UserFollowersListProps } from '../../components/users/lists/UserFollowersList';
import { SectionProps, HeadingProps } from '../../types';
type SocialFollowersProps = SectionProps & HeadingProps & UserFollowersListProps;
declare const SocialFollowers: React.FC<SocialFollowersProps>;
export default SocialFollowers;
