import React from 'react';
import { CollectionShowProps } from '../../components/cms/show/CollectionShow';
import { SectionProps } from '../../types';
type CmsShowProps = SectionProps & CollectionShowProps;
declare const CmsShow: React.FC<CmsShowProps>;
export default CmsShow;
