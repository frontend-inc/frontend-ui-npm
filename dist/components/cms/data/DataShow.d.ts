import React from 'react';
export type DataShowProps = {
    open: boolean;
    handleClose: () => void;
    loading: boolean;
    errors: any;
    resource: any;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: () => void;
    handleDelete?: () => void;
    fields: any[];
};
declare const DataShow: React.FC<DataShowProps>;
export default DataShow;
