import React from 'react';
import { ListItemsProps } from './ListItems';
export type KanBanListListProps = ListItemsProps & {
    headers: {
        label: string;
        value: string;
    }[];
    enableCreate?: boolean;
};
declare const KanBanListList: React.FC<KanBanListListProps>;
export default KanBanListList;
