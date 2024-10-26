import React from 'react';
import { ShowYouTubeProps } from '../../components/cms/show/ShowYouTube';
import { SectionProps } from '../../types';
type CmsYouTubeProps = SectionProps & ShowYouTubeProps;
declare const CmsYouTube: React.FC<CmsYouTubeProps>;
export default CmsYouTube;
