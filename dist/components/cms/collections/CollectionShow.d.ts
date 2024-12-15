import React from 'react';
export type CollectionShowProps = {
    handle?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionShow: React.FC<CollectionShowProps>;
export default CollectionShow;
