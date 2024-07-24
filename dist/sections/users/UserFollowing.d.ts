import React from 'react';
import { UserFollowingListProps } from '../../components/users/lists/UserFollowingList';
import { SectionProps, HeadingProps } from '../../types';
type SocialFollowingProps = SectionProps & HeadingProps & UserFollowingListProps;
declare const SocialFollowing: React.FC<SocialFollowingProps>;
export default SocialFollowing;
