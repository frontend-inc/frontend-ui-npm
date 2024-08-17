import React from 'react';
import { DataListItemsProps } from './DataListItems';
export type KanBanListItemsProps = DataListItemsProps & {
    headers: {
        label: string;
        value: string;
    }[];
    enableCreate?: boolean;
};
declare const KanBanListItems: React.FC<KanBanListItemsProps>;
export default KanBanListItems;
