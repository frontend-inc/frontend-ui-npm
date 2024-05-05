import React from 'react';
import { FieldType, TableHeaderType } from '../../../types';
import { CollectionProps } from './Collection';
export type ForeignCollectionTableProps = CollectionProps & {
    resource: any;
    field: FieldType;
    foreignUrl?: string;
    foreignContentType?: string;
    headers: TableHeaderType[];
};
declare const ForeignCollectionTable: React.FC<ForeignCollectionTableProps>;
export default ForeignCollectionTable;
