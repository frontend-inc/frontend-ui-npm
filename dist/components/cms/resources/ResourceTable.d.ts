import React from 'react';
import { TableHeaderType } from '../../../types';
import { ResourcesProps } from './Resources';
export type ResourceTableProps = ResourcesProps & {
    headers: TableHeaderType[];
};
declare const ResourceTable: React.FC<ResourceTableProps>;
export default ResourceTable;
