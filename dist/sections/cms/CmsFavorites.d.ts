import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
type CmsFavoritesProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsFavorites: React.FC<CmsFavoritesProps>;
export default CmsFavorites;
