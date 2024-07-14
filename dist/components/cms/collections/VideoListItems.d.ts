import React from 'react';
export type VideoListItemsProps = {
    url: string;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableUsers?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const VideoListItems: React.FC<VideoListItemsProps>;
export default VideoListItems;
