import React from 'react';
import { HeroContainerProps } from './HeroContainer';
import { HeroItemProps } from './HeroItem';
export type HeroProps = HeroContainerProps & HeroItemProps;
declare const Hero: React.FC<HeroProps>;
export default Hero;
