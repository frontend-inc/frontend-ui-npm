import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection';
type CmsForeignListProps = SectionProps & HeadingProps & ForeignCollectionProps;
declare const CmsForeignList: React.FC<CmsForeignListProps>;
export default CmsForeignList;
