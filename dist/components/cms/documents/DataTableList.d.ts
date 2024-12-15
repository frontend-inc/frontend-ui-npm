import React from 'react';
import { DocumentListProps } from '../documents/DocumentList';
import { TableHeaderType } from '../../../types';
export type DataTableListProps = DocumentListProps & {
    headers: TableHeaderType[];
};
declare const DataTableList: React.FC<DataTableListProps>;
export default DataTableList;
