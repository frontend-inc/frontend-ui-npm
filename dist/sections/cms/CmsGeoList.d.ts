import React from 'react';
import { GeoListProps } from '../../components/cms/collections/GeoList';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsGeoListProps = SectionProps & HeadingProps & GeoListProps & FormProps;
declare const CmsGeoList: React.FC<CmsGeoListProps>;
export default CmsGeoList;
