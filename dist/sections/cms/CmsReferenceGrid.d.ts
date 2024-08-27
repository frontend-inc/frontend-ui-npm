import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsReferenceGridProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsReferenceGrid: React.FC<CmsReferenceGridProps>;
export default CmsReferenceGrid;
