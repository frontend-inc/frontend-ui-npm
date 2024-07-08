import React from 'react';
import { ForeignCollectionGeoProps } from '../../components/cms/collections/ForeignCollectionGeo';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignGeoListProps = SectionProps & HeadingProps & ForeignCollectionGeoProps;
declare const CmsForeignGeoList: React.FC<CmsForeignGeoListProps>;
export default CmsForeignGeoList;
