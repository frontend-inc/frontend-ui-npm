import React from 'react';
import { ResourceListProps } from './ResourceListItems';
type SortableResourceListItemsProps = ResourceListProps & {
    handleDrop: (sorted: any) => void;
    component?: React.FC<any>;
};
declare const SortableResourceListItems: React.FC<SortableResourceListItemsProps>;
export default SortableResourceListItems;
