import React from 'react';
import { HeroProps } from './Hero';
export type HeroYouTubeProps = HeroProps & {
    fieldName: string;
};
declare const HeroYouTube: React.FC<HeroYouTubeProps>;
export default HeroYouTube;
