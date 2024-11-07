import React from 'react';
export type VideoModalProps = {
    open: boolean;
    handleClose: () => void;
    resource: any;
};
declare const VideoModal: React.FC<VideoModalProps>;
export default VideoModal;
