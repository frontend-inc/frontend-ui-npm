import React from 'react';
import { ListProps } from './List';
import { TableHeaderType } from '../../../types';
export type DataTableListProps = ListProps & {
    headers: TableHeaderType[];
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
