import React from 'react';
import { FieldType, TableHeaderType } from '../../../types';
import { CollectionListProps } from './CollectionList';
export type ForeignCollectionTableProps = CollectionListProps & {
    resource: any;
    field: FieldType;
    foreignUrl?: string;
    headers: TableHeaderType[];
};
declare const ForeignCollectionTable: React.FC<ForeignCollectionTableProps>;
export default ForeignCollectionTable;
