import React from 'react';
import { HeroProps } from './Hero';
type HeroContainerProps = HeroProps & {
    children: React.ReactNode;
};
declare const HeroContainer: React.FC<HeroContainerProps>;
export default HeroContainer;
