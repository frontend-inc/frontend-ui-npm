import React from 'react';
import { ListItemsProps } from './ListItems';
export type KanBanListItemsProps = ListItemsProps & {
    headers: {
        label: string;
        value: string;
    }[];
    enableCreate?: boolean;
};
declare const KanBanListItems: React.FC<KanBanListItemsProps>;
export default KanBanListItems;
