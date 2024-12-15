import React from 'react';
import { PlacesListProps } from '../../components/cms/documents/PlacesList';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsPlacesProps = SectionProps & HeadingProps & PlacesListProps & FormProps;
declare const CmsPlaces: React.FC<CmsPlacesProps>;
export default CmsPlaces;
