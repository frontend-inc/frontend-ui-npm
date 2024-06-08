import React from 'react';
import { HeroProps } from './Hero';
export type HeroVimeoProps = HeroProps & {
    fieldName: string;
};
declare const VimeoVideo: React.FC<HeroVimeoProps>;
export default VimeoVideo;
