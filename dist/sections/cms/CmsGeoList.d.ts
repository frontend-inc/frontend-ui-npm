import React from 'react';
import { CollectionGeoProps } from '../../components/cms/collections/CollectionGeo';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsGeoListProps = SectionProps & HeadingProps & CollectionGeoProps & FormProps;
declare const CmsGeoList: React.FC<CmsGeoListProps>;
export default CmsGeoList;
