import React from 'react';
import { HeroProps } from '../../components/ui/heros/Hero';
import { SectionProps } from '../../types';
type UIHeroProps = SectionProps & HeroProps;
declare const UIHero: React.FC<UIHeroProps>;
export default UIHero;
