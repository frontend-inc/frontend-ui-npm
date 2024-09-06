import React from 'react';
type MediaListItemProps = {
    item?: any;
    handleClick?: () => void;
    selected?: boolean;
};
declare const MediaListItem: React.FC<MediaListItemProps>;
export default MediaListItem;
