import React from 'react';
export type VideoGridItemsProps = {
    url: string;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
};
declare const VideoGridItems: React.FC<VideoGridItemsProps>;
export default VideoGridItems;
