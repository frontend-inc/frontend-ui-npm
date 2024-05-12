import React from 'react';
type VideosProps = {
    title?: string;
    url: string;
    variant: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover' | 'chip' | 'text' | 'image';
    editing?: boolean;
    perPage?: number;
    query?: any;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Videos: React.FC<VideosProps>;
export default Videos;
