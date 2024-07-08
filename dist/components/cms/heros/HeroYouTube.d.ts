import React from 'react';
import { HeroProps } from './HeroItem';
export type HeroYouTubeProps = HeroProps & {
    fieldName: string;
};
declare const HeroYouTube: React.FC<HeroYouTubeProps>;
export default HeroYouTube;
