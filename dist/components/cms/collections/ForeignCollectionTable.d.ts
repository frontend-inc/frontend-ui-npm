import React from 'react';
import { ForeignCollectionProps } from './ForeignCollection';
import { TableHeaderType } from '../../../types';
export type ForeignCollectionTableProps = ForeignCollectionProps & {
    headers: TableHeaderType[];
};
declare const ForeignCollectionTable: React.FC<ForeignCollectionTableProps>;
export default ForeignCollectionTable;
