import React from 'react';
import { ResourceListItemsProps } from './ResourceListItems';
type SortableListItemsProps = ResourceListItemsProps & {
    droppableId: string;
    handleDrop: (sorted: any[]) => void;
    slots?: {
        list?: any;
        pagination?: any;
    };
};
declare const SortableListItems: React.FC<SortableListItemsProps>;
export default SortableListItems;
