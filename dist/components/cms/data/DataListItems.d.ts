import React from 'react';
export type DataListItemsProps = {
    grid?: boolean;
    selectable?: boolean;
    href?: string;
    enableShow?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleClick?: (resource: any) => void;
    handleAdd?: (resource: any) => void;
    pagination?: React.FC<any>;
    component?: React.FC<any>;
    slots?: {
        item?: any;
        list?: any;
    };
};
declare const DataListItems: React.FC<DataListItemsProps>;
export default DataListItems;
