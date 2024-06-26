import React from 'react';
import { CollectionSimilarProps } from '../../components/cms/collections/CollectionSimilar';
import { SectionProps, HeadingProps } from '../../types';
type CmsSimilarProps = SectionProps & HeadingProps & CollectionSimilarProps;
declare const CmsSimilar: React.FC<CmsSimilarProps>;
export default CmsSimilar;
