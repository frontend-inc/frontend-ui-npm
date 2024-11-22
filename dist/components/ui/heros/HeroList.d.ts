import React from 'react';
import { ButtonType } from '../../../types';
export type HeroProps = {
    variant?: 'circular' | 'square';
    textAlign?: 'left' | 'center';
    image: string;
    label?: string;
    category?: string;
    title: string;
    subtitle?: string;
    description?: string;
    html?: string;
    startsAt?: string;
    endsAt?: string;
    publishedAt?: string;
    location?: string;
    lat?: number;
    lng?: number;
    tags?: string[];
    youtubeSrc?: string;
    vimeoSrc?: string;
    soundcloudSrc?: string;
    shopifyProduct?: string;
    user?: {
        name: string;
        avatar: {
            url: string;
        };
    };
    style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight';
    buttons?: ButtonType[];
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    disableImage?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    objectFit?: 'cover' | 'contain';
};
declare const HeroList: React.FC<HeroProps>;
export default HeroList;
