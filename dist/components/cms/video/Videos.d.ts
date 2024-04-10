import React from 'react';
type VideosProps = {
    title?: string;
    url: string;
    layout: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover';
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
