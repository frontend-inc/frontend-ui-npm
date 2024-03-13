import React from 'react';
type CollectionListProps = {
    resources: any;
    handleClick: (item: any) => void;
    layout: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover';
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
