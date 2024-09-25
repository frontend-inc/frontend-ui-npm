import React from 'react';
import { GeoListProps } from '../../components/cms/collections/GeoList';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsPlacesListProps = SectionProps & HeadingProps & GeoListProps & FormProps;
declare const CmsPlacesList: React.FC<CmsPlacesListProps>;
export default CmsPlacesList;
