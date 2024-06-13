import React from 'react';
import { UserFollowersProps } from '../../components/social/follow/UserFollowers';
import { SectionProps, HeadingProps } from '../../types';
type SocialFollowersProps = SectionProps & HeadingProps & UserFollowersProps;
declare const SocialFollowers: React.FC<SocialFollowersProps>;
export default SocialFollowers;
