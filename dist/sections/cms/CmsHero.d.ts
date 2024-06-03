import React from 'react';
import { HeroItemProps } from '../../components/cms/heros/Hero';
import { SectionProps } from '../../types';
type CmsHeroProps = SectionProps & HeroItemProps;
declare const CmsHero: React.FC<CmsHeroProps>;
export default CmsHero;
