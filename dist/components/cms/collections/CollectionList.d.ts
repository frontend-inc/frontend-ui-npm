import React from 'react';
import { ActionType } from '../../../types';
type CollectionListProps = {
    resources: any;
    actions: ActionType[];
    variant: 'list' | 'grid';
    style: 'card' | 'avatar' | 'cover' | 'chip' | 'text' | 'image';
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit: boolean;
    enableDelete: boolean;
    handleClick: (item: any) => void;
    handleEdit: (item: any) => void;
    handleDelete: (item: any) => void;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
