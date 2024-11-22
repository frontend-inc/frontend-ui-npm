import React from 'react';
import { ShowContainerProps } from '../../components/cms/show/ShowContainer';
import { SectionProps } from '../../types';
type CmsShowProps = SectionProps & ShowContainerProps;
declare const CmsShow: React.FC<CmsShowProps>;
export default CmsShow;
