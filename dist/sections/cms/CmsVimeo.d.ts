import React from 'react';
import { HeroVimeoProps } from '../../components/cms/heros/addons/HeroVimeo';
import { SectionProps } from '../../types';
type CmsVimeoProps = SectionProps & HeroVimeoProps;
declare const CmsVimeo: React.FC<CmsVimeoProps>;
export default CmsVimeo;
