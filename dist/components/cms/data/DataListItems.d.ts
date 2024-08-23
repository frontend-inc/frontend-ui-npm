import React from 'react';
export type DataListItemsProps = {
    enableShow?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleShow?: (resource: any) => void;
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
declare const DataListItems: React.FC<DataListItemsProps>;
export default DataListItems;
