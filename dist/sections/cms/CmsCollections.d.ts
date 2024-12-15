import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsCollectionsProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsCollections: React.FC<CmsCollectionsProps>;
export default CmsCollections;
