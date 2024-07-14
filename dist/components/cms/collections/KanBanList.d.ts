import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type KanBanListProps = ListItemsProps & ListContainerProps & {
    headers: {
        label: string;
        value: string;
    }[];
};
declare const KanBanList: React.FC<KanBanListProps>;
export default KanBanList;
