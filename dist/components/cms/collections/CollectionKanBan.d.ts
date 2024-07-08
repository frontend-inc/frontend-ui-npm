import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type CollectionKanBanProps = CollectionListProps & CollectionContainerProps & {
    headers: {
        label: string;
        value: string;
    }[];
};
declare const CollectionKanBan: React.FC<CollectionKanBanProps>;
export default CollectionKanBan;
