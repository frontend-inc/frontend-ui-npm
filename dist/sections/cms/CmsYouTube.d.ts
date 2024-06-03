import React from 'react';
import { HeroYouTubeProps } from '../../components/cms/heros/addons/HeroYouTube';
import { SectionProps } from '../../types';
type CmsYouTubeProps = SectionProps & HeroYouTubeProps;
declare const CmsYouTube: React.FC<CmsYouTubeProps>;
export default CmsYouTube;
