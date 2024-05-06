import React from 'react';
import { ShowProps } from '../../components/cms/show/Show';
import { SectionProps } from '../../types';
type CmsYouTubeProps = SectionProps & ShowProps;
declare const CmsYouTube: React.FC<CmsYouTubeProps>;
export default CmsYouTube;
