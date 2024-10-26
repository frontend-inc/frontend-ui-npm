import React from 'react';
export type SortableDataListItemsProps = {
    enableShow?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleClick: (resource: any) => void;
    pagination?: React.FC<any>;
    component?: React.FC<any>;
    slots?: {
        item?: any;
        list?: any;
    };
};
declare const SortableDataListItems: React.FC<SortableDataListItemsProps>;
export default SortableDataListItems;
