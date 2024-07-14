import React from 'react';
type VideoCardProps = {
    enableUsers?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableLikes?: boolean;
    resource: any;
    handleClick: () => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
};
declare const VideoCard: React.FC<VideoCardProps>;
export default VideoCard;
