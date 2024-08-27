import React from 'react';
export type ImageGridItemsProps = {
    url: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
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
declare const ImageGridItems: React.FC<ImageGridItemsProps>;
export default ImageGridItems;
