import React from 'react';
import { ButtonType } from '../../../types';
export type HeroProps = {
    title?: string;
    description?: string;
    image?: string;
    style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight';
    buttons?: ButtonType[];
};
declare const Hero: React.FC<HeroProps>;
export default Hero;
