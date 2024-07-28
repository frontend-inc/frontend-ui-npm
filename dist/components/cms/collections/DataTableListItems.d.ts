import React from 'react';
import { TableHeaderType } from '../../../types';
import { ListItemsProps } from './ListItems';
export type DataTableListProps = ListItemsProps & {
    headers: TableHeaderType[];
    enableShow?: boolean;
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
