import React from 'react';
import { HeroProps } from './Hero';
type HeroArticleProps = HeroProps & {
    disableImage?: boolean;
};
declare const HeroArticle: React.FC<HeroArticleProps>;
export default HeroArticle;
