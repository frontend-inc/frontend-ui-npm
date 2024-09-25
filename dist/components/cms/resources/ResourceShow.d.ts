import React from 'react';
export type ResourceShowProps = {
    title?: string;
    open: boolean;
    handleClose: () => void;
    loading: boolean;
    errors: any;
    resource: any;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: () => void;
    handleDelete?: () => void;
    handleReload: () => void;
    fields: any[];
};
declare const ResourceShow: React.FC<ResourceShowProps>;
export default ResourceShow;
