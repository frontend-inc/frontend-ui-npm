import React from 'react';
import { ResourceListProps } from './ResourceList';
type SortableResourceListProps = ResourceListProps & {
    handleDrop: (sorted: any) => void;
    component?: React.FC<any>;
};
declare const SortableResourceList: React.FC<SortableResourceListProps>;
export default SortableResourceList;
