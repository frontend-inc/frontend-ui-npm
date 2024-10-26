import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsReferenceListProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsReferenceList: React.FC<CmsReferenceListProps>;
export default CmsReferenceList;
