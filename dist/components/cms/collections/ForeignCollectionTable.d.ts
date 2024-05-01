import React from 'react';
import { FieldType } from '../../../types';
import { CollectionProps } from './Collection';
export type ForeignCollectionTableProps = CollectionProps & {
    resource: any;
    field: FieldType;
    foreignUrl?: string;
    headers: {
        name: string;
        label: string;
        variant: string;
        sortable: boolean;
    }[];
};
declare const ForeignCollectionTable: React.FC<ForeignCollectionTableProps>;
export default ForeignCollectionTable;
