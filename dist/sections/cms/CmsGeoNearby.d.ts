import React from 'react';
import { CollectionGeoNearbyProps } from '../../components/cms/collections/CollectionGeoNearby';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & CollectionGeoNearbyProps;
declare const CmsNearby: React.FC<CmsListProps>;
export default CmsNearby;
