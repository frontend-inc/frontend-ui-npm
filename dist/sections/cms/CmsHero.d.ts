import React from 'react';
import { HeroProps } from '../../components/cms/heros/Hero';
import { SectionProps } from '../../types';
type CmsHeroProps = SectionProps & HeroProps;
declare const CmsHero: React.FC<CmsHeroProps>;
export default CmsHero;
