import React from 'react';
type ResourceToolbarModalProps = {
    open: boolean;
    handleClose: () => void;
    enableDelete?: boolean;
    enablePublish?: boolean;
    handleDelete?: () => void;
    handlePublish?: () => void;
    handleUnpublish?: () => void;
    actions: React.ReactNode;
    selected: any[];
    selectedIds: number[] | string[];
};
declare const ResourceToolbar: React.FC<ResourceToolbarModalProps>;
export default ResourceToolbar;
