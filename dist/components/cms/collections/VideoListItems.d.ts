import React from 'react';
export type VideoListItemsProps = {
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
declare const VideoListItems: React.FC<VideoListItemsProps>;
export default VideoListItems;
