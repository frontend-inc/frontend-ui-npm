import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CollectionKanBanListProps = CollectionListProps & {
    headers: {
        label: string;
        value: string;
    }[];
    enableCreate?: boolean;
};
declare const CollectionKanBanList: React.FC<CollectionKanBanListProps>;
export default CollectionKanBanList;
