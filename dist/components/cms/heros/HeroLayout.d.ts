import React from 'react';
import { HeroProps } from './HeroItem';
type HeroLayoutProps = HeroProps & {
    children?: React.ReactNode;
};
declare const HeroLayout: React.FC<HeroLayoutProps>;
export default HeroLayout;
