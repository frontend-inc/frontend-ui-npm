import React from 'react';
import { CollectionListProps } from './CollectionList';
export type ReferenceKanBanListProps = CollectionListProps & {
    fieldName: string;
    headers: {
        label: string;
        value: string;
    }[];
};
declare const ReferenceKanBanList: React.FC<ReferenceKanBanListProps>;
export default ReferenceKanBanList;
