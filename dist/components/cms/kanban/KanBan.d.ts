import React from 'react';
import { CollectionListProps } from '../../../components/cms/collections/CollectionList';
import { TableHeaderType } from '../../../types';
export type KanBanProps = CollectionListProps & {
    resources: any;
    fieldName: string;
    headers: TableHeaderType[];
    handleDrop: (resource: any) => void;
    handleClick: () => void;
};
declare const KanBan: React.FC<KanBanProps>;
export default KanBan;
