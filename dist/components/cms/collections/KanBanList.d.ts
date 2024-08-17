import React from 'react';
import { DataListProps } from './DataList';
export type KanBanListProps = DataListProps & {
    headers: {
        label: string;
        value: string;
    }[];
};
declare const KanBanList: React.FC<KanBanListProps>;
export default KanBanList;
