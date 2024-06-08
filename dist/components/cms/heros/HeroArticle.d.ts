import React from 'react';
import { HeroProps } from './Hero';
type HeroArticleProps = HeroProps & {
    disableImage?: boolean;
    direction?: 'column' | 'column-reverse';
};
declare const HeroArticle: React.FC<HeroArticleProps>;
export default HeroArticle;
