import React from 'react';
type ResourceToolbarModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};
declare const ResourceToolbarModal: React.FC<ResourceToolbarModalProps>;
export default ResourceToolbarModal;
