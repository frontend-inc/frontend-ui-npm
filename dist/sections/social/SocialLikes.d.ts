import React from 'react';
import { LikesProps } from '../../components/social/likes/Likes';
import { SectionProps, HeadingProps } from '../../types';
type SocialLikesProps = SectionProps & HeadingProps & LikesProps;
declare const SocialLikes: React.FC<SocialLikesProps>;
export default SocialLikes;
