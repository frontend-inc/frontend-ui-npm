import React from 'react';
import { CollectionListProps } from './CollectionList';
import { ForeignCollectionContainerProps } from './ForeignCollectionContainer';
export type ForeignCollectionKanBanProps = CollectionListProps & ForeignCollectionContainerProps & {
    headers: {
        label: string;
        value: string;
    }[];
};
declare const CollectionKanBan: React.FC<ForeignCollectionKanBanProps>;
export default CollectionKanBan;
