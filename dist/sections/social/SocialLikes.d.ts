import React from 'react';
import { LikesProps } from '../../components/social/likes/Likes';
import { SectionProps, HeadingProps } from '../../types';
type SocialFavoritesProps = SectionProps & HeadingProps & LikesProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
