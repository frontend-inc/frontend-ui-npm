import React from 'react';
type MediaItemProps = {
    item?: any;
    size?: number;
    selected?: boolean;
    handleClick?: (item: any) => void;
    handleRemoveItem?: (item: any) => void;
};
declare const MediaItem: React.FC<MediaItemProps>;
export default MediaItem;
