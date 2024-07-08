import React from 'react';
import { CollectionSimilarProps } from '../../components/cms/collections/CollectionSimilar';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & CollectionSimilarProps;
declare const CmsSimilar: React.FC<CmsListProps>;
export default CmsSimilar;
