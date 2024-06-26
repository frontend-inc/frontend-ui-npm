import React from 'react';
import { CollectionListProps } from './CollectionList';
import { ActionType } from '../../../types';
export type CollectionKanBanProps = CollectionListProps & {
    headers: {
        label: string;
        value: string;
    }[];
    actions: ActionType[];
    fieldName: string;
};
declare const CollectionKanBan: React.FC<CollectionKanBanProps>;
export default CollectionKanBan;
