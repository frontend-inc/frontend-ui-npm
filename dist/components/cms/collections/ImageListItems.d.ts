import React from 'react';
export type ImageListItemsProps = {
    url: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const ImageListItems: React.FC<ImageListItemsProps>;
export default ImageListItems;
