import React from 'react';
import { CollectionListProps } from '../collections/CollectionList';
import { TableHeaderType } from '../../../types';
export type DataTableListProps = CollectionListProps & {
    headers: TableHeaderType[];
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
