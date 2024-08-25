import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsSortableListProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsSortableList: React.FC<CmsSortableListProps>;
export default CmsSortableList;
