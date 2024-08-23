import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
type SocialFavoritesProps = SectionProps & HeadingProps & CollectionListProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
