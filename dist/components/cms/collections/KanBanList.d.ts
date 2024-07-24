import React from 'react';
import { ListProps } from './List';
export type KanBanListProps = ListProps & {
    headers: {
        label: string;
        value: string;
    }[];
};
declare const KanBanList: React.FC<KanBanListProps>;
export default KanBanList;
