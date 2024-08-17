import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { DataListProps } from '../../components/cms/collections/DataList';
type SocialFavoritesProps = SectionProps & HeadingProps & DataListProps;
declare const SocialFavorites: React.FC<SocialFavoritesProps>;
export default SocialFavorites;
