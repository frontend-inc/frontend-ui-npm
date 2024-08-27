import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsGridProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsGrid: React.FC<CmsGridProps>;
export default CmsGrid;
