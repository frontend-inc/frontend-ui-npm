import React from 'react';
import { DataListProps } from './DataList';
import { TableHeaderType } from '../../../types';
export type DataTableListProps = DataListProps & {
    headers: TableHeaderType[];
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
