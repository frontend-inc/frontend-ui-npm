import React from 'react';
import { HeroCardProps } from './HeroCard';
type HeroSnippetProps = HeroCardProps & {
    circular?: boolean;
    disableImage?: boolean;
    slots?: {
        image?: any;
    };
};
declare const HeroSnippet: React.FC<HeroSnippetProps>;
export default HeroSnippet;
