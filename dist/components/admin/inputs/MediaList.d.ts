import React from 'react';
type MediaListProps = {
    selectedIds: number[];
    handleSelect: (item: any) => void;
};
declare const MediaList: React.FC<MediaListProps>;
export default MediaList;
