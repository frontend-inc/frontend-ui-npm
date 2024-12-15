import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { DocumentListProps } from '../../components/cms/documents/DocumentList';
type CmsFavoritesProps = SectionProps & HeadingProps & DocumentListProps;
declare const CmsFavorites: React.FC<CmsFavoritesProps>;
export default CmsFavorites;
