import React from 'react';
type MediaItemListProps = {
    selectedIds: number[];
    handleSelect: (item: any) => void;
};
declare const MediaItemList: React.FC<MediaItemListProps>;
export default MediaItemList;
