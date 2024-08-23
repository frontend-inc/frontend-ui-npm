import React from 'react';
import { TableHeaderType } from '../../../types';
import { DataListItemsProps } from '../data/DataListItems';
export type DataTableListProps = DataListItemsProps & {
    headers: TableHeaderType[];
    enableShow?: boolean;
    href?: string;
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
