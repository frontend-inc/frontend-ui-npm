import React from 'react';
import { UserFollowingProps } from '../../components/social/follow/UserFollowing';
import { SectionProps, HeadingProps } from '../../types';
type SocialFollowingProps = SectionProps & HeadingProps & UserFollowingProps;
declare const SocialFollowing: React.FC<SocialFollowingProps>;
export default SocialFollowing;
