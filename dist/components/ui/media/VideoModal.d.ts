import React from 'react';
export type VideoModalProps = {
    open: boolean;
    handleClose: () => void;
    src: string;
};
declare const VideoModal: React.FC<VideoModalProps>;
export default VideoModal;
