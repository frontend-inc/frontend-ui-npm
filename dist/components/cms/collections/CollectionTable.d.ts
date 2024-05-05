import React from 'react';
import { TableHeaderType } from '../../../types';
import { CollectionProps } from './Collection';
export type CollectionTableProps = CollectionProps & {
    headers: TableHeaderType[];
};
declare const CollectionTable: React.FC<CollectionTableProps>;
export default CollectionTable;
