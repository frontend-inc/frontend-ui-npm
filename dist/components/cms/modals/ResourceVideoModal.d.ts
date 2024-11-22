import React from 'react';
export type VideoModalProps = {
    open: boolean;
    handleClose: () => void;
    resource: any;
};
declare const ResourceVideoModal: React.FC<VideoModalProps>;
export default ResourceVideoModal;
