import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
import { TableHeaderType } from '../../../types';
export type DataTableListProps = ListItemsProps & ListContainerProps & {
    headers: TableHeaderType[];
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
