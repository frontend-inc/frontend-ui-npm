import React from 'react';
import { ShowProps } from '../../components/cms/show/Show';
import { SectionProps } from '../../types';
type CmsShowProps = SectionProps & ShowProps;
declare const CmsShow: React.FC<CmsShowProps>;
export default CmsShow;
