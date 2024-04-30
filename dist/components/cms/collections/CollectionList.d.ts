import React from 'react';
type CollectionListProps = {
    resources: any;
    handleClick: (item: any) => void;
    variant: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover' | 'chip';
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
