import React from 'react';
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignGeoListProps = SectionProps & HeadingProps & ForeignCollectionProps;
declare const CmsForeignGeoList: React.FC<CmsForeignGeoListProps>;
export default CmsForeignGeoList;
