import React from 'react';
import { ResourceListProps } from './ResourceList';
type SortableResourceListProps = ResourceListProps & {
    handleDrop: (sorted: any) => void;
};
declare const SortableResourceList: React.FC<SortableResourceListProps>;
export default SortableResourceList;
