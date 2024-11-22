import React from 'react';
type VideoType = {
    label?: string;
    title: string;
    subtitle?: string;
    video: string;
};
export type VideosProps = {
    style?: 'card' | 'cover';
    items: VideoType[];
    orientation?: 'vertical' | 'horizontal';
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Videos: React.FC<VideosProps>;
export default Videos;
