import React from 'react';
type ImageCardProps = {
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
declare const ImageCard: React.FC<ImageCardProps>;
export default ImageCard;
