import React from 'react';
import { CollectionProps } from '../../components/cms/collections/Collection';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & CollectionProps;
declare const CmsList: React.FC<CmsListProps>;
export default CmsList;
