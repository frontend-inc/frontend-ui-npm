import React from 'react';
type MediaItemProps = {
    item?: any;
    selected?: boolean;
    handleClick?: (item: any) => void;
    handleRemove?: () => void;
};
declare const MediaItem: React.FC<MediaItemProps>;
export default MediaItem;
