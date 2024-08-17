import React from 'react';
import { TableHeaderType } from '../../../types';
import { DataListItemsProps } from './DataListItems';
export type DataTableListProps = DataListItemsProps & {
    headers: TableHeaderType[];
    enableShow?: boolean;
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
