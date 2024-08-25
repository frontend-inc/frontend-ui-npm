import React from 'react';
import { FieldGoogleMapProps } from '../../../components/cms/addons/FieldGoogleMap';
import { SectionProps, HeadingProps } from '../../../types';
type CmsGoogleMapProps = SectionProps & HeadingProps & FieldGoogleMapProps;
declare const CmsGoogleMap: React.FC<CmsGoogleMapProps>;
export default CmsGoogleMap;
