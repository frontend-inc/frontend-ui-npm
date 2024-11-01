import React from 'react';
import { SimilarListProps } from '../../components/cms/collections/SimilarList';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & SimilarListProps;
declare const CmsSimilar: React.FC<CmsListProps>;
export default CmsSimilar;
