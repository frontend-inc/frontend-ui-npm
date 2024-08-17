import React from 'react';
import { DataListProps } from '../../components/cms/collections/DataList';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & DataListProps;
declare const CmsGeoNearbyList: React.FC<CmsListProps>;
export default CmsGeoNearbyList;
