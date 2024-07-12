import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { CollectionProps } from '../../components/cms/collections/Collection';
type SocialFavoritesProps = SectionProps & HeadingProps & CollectionProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
