import React from 'react';
export type ResourceModalProps = {
    title?: string;
    open: boolean;
    handleClose: () => void;
    loading?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: () => void;
    handleDelete?: () => void;
    disablePadding?: boolean;
    children?: any;
};
declare const ResourceModal: React.FC<ResourceModalProps>;
export default ResourceModal;
