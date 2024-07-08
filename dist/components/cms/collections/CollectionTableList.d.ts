import React from 'react';
import { TableHeaderType } from '../../../types';
import { CollectionListProps } from './CollectionList';
export type CollectionTableProps = CollectionListProps & {
    headers: TableHeaderType[];
};
declare const CollectionTable: React.FC<CollectionTableProps>;
export default CollectionTable;
