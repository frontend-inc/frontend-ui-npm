import React from 'react';
import { AddonGoogleMapProps } from '../../../components/cms/addons/AddonGoogleMap';
import { SectionProps, HeadingProps } from '../../../types';
type CmsGoogleMapProps = SectionProps & HeadingProps & AddonGoogleMapProps;
declare const CmsGoogleMap: React.FC<CmsGoogleMapProps>;
export default CmsGoogleMap;
