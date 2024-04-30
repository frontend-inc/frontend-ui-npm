import React from 'react';
import { CollectionProps } from './Collection';
export type CollectionTableProps = CollectionProps & {
    headers: {
        name: string;
        label: string;
        variant: string;
        sortable: boolean;
    }[];
};
declare const CollectionTable: React.FC<CollectionTableProps>;
export default CollectionTable;
