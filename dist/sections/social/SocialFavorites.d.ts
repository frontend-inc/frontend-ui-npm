import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { ListProps } from '../../components/cms/collections/List';
type SocialFavoritesProps = SectionProps & HeadingProps & ListProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
