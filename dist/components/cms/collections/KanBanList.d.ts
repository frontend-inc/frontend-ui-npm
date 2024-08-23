import React from 'react';
import { CollectionListProps } from '../collections/CollectionList';
export type KanBanListProps = CollectionListProps & {
    fieldName: string;
    headers: {
        label: string;
        value: string;
    }[];
};
declare const KanBanList: React.FC<KanBanListProps>;
export default KanBanList;
