import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsSortableReferenceListProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsSortableReferenceList: React.FC<CmsSortableReferenceListProps>;
export default CmsSortableReferenceList;
