import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
import { TableHeaderType } from '../../../types';
export type CollectionTableProps = CollectionListProps & CollectionContainerProps & {
    headers: TableHeaderType[];
};
declare const CollectionTable: React.FC<CollectionTableProps>;
export default CollectionTable;
