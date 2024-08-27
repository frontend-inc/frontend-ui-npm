import React from 'react';
import { CollectionListProps } from '../collections/CollectionList';
export type KanBanListItemsProps = CollectionListProps & {
    headers: {
        label: string;
        value: string;
    }[];
    component?: React.ReactNode;
    enableSharing?: boolean;
    enableCreate?: boolean;
};
declare const ReferenceKanBanListItems: React.FC<KanBanListItemsProps>;
export default ReferenceKanBanListItems;
