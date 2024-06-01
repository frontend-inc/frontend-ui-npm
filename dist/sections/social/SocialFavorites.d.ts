import React from 'react';
import { FavoritesProps } from '../../components/social/favorites/Favorites';
import { SectionProps, HeadingProps } from '../../types';
type SocialFavoritesProps = SectionProps & HeadingProps & FavoritesProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
